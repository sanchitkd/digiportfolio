"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactForm } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: ContactForm) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      toast.success("Message sent!");
    } else {
      toast.error("Failed to send");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gold-gradient">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 glass-card rounded-2xl p-6 border grid grid-cols-1 gap-4">
          <div>
            <Input {...register("name")} placeholder="Name" className="bg-transparent" />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <Input {...register("email")} placeholder="Email" className="bg-transparent" />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <Input {...register("subject")} placeholder="Subject" className="bg-transparent" />
            {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
          </div>
          <div>
            <Textarea {...register("message")} placeholder="Message" rows={5} className="bg-transparent" />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>
          <Button disabled={isSubmitting} className="justify-self-start bg-[color:var(--gold)] text-black hover:opacity-90">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}


