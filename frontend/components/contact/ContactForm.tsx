"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";

const businessTypes = [
  "Retail Shop",
  "Restaurant / Café",
  "Bakery",
  "Clinic / Hospital",
  "Boutique / Fashion",
  "Services / Consulting",
  "E-commerce",
  "Nonprofit / NGO",
  "Education",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  businessType: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.businessType) {
      toast.error("Please select your business type.");
      return;
    }

    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          business_type: form.businessType,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Server error");

      toast.success("Message sent!", {
        description: "Thanks! We'll be in touch within 24 hours.",
      });
      setForm(empty);
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Rahul Sharma"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          required
          minLength={2}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="rahul@mybusiness.in"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 99000 00000"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
            minLength={10}
            maxLength={15}
          />
        </div>
      </div>

      {/* Business Type */}
      <div className="space-y-1.5">
        <Label htmlFor="business-type">Business Type *</Label>
        <Select
          value={form.businessType}
          onValueChange={(v) => set("businessType", v ?? "")}
        >
          <SelectTrigger id="business-type">
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your business and how we can help..."
          rows={5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          required
          minLength={10}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full hover:opacity-90 transition-opacity"
        style={{ background: "var(--color-saffron)", color: "white" }}
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
