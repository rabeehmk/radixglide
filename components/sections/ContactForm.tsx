"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { budgetRanges, enquiryServices, planMessages, projectTypes } from "@/data/contact";
import { emptyEnquiry, enquirySummary, validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";
import { whatsappLink } from "@/lib/contact-links";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsApp";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-midnight outline-none transition-all placeholder:text-midnight/35 focus:border-electric focus:ring-4 focus:ring-electric/10";

function Field({
  id,
  label,
  required,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-midnight">
        {label}
        {required && <span className="ml-0.5 text-electric">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
          >
            <AlertCircle className="size-3.5 shrink-0" aria-hidden /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const uid = useId();
  const params = useSearchParams();
  const [form, setForm] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorCode, setErrorCode] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill from pricing-page links (?plan=growth) or service pages (?service=...)
  useEffect(() => {
    const plan = params.get("plan");
    const service = params.get("service");
    setForm((f) => ({
      ...f,
      message: f.message || (plan && planMessages[plan]) || "",
      service: f.service || (service && enquiryServices.includes(service) ? service : ""),
    }));
  }, [params]);

  const id = (name: string) => `${uid}-${name}`;
  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched) setErrors(validateEnquiry(next));
  };
  const aria = (name: keyof Enquiry) => ({
    id: id(name),
    name,
    "aria-invalid": Boolean(errors[name]) || undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });
  const border = (name: keyof Enquiry) => (errors[name] ? "border-red-400" : "border-midnight/10");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    const found = validateEnquiry(form);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: EnquiryErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setErrorCode(data.code ?? "unknown");
      setStatus("error");
    } catch {
      setErrorCode("network");
      setStatus("error");
    }
  }

  const waFallback = whatsappLink(enquirySummary(form));

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex min-h-[520px] flex-col items-center justify-center rounded-[28px] border border-midnight/[0.07] bg-white p-10 text-center"
      >
        <span className="grid size-16 place-items-center rounded-full bg-electric/10 text-electric">
          <CheckCircle2 className="size-8" />
        </span>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-midnight">Enquiry sent</h2>
        <p className="mt-3 max-w-sm text-slate">
          Thanks! Your enquiry has been submitted. Our team will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyEnquiry);
            setTouched(false);
            setErrors({});
            setStatus("idle");
          }}
          className="mt-8 text-sm font-semibold text-electric hover:underline"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-[28px] border border-midnight/[0.07] bg-white p-6 shadow-[0_40px_90px_-50px_rgba(11,37,69,0.35)] sm:p-10"
    >
      <h2 className="text-2xl font-bold tracking-[-0.03em] text-midnight">Tell us about your project</h2>
      <p className="mt-2 text-sm text-slate">Fields marked * are required.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label="Full Name" required error={errors.name}>
          <input
            {...aria("name")}
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={cn(inputCls, border("name"))}
            placeholder="Your full name"
          />
        </Field>
        <Field id={id("company")} label="Business / Company Name" error={errors.company}>
          <input
            {...aria("company")}
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            className={cn(inputCls, border("company"))}
            placeholder="Company name"
          />
        </Field>
        <Field id={id("email")} label="Email" required error={errors.email}>
          <input
            {...aria("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={cn(inputCls, border("email"))}
            placeholder="you@company.com"
          />
        </Field>
        <Field id={id("phone")} label="Phone / WhatsApp" error={errors.phone}>
          <input
            {...aria("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={cn(inputCls, border("phone"))}
            placeholder="Include country code"
          />
        </Field>

        <Field id={id("service")} label="Service Required" required error={errors.service} className="sm:col-span-2">
          <div className="relative">
            <select
              {...aria("service")}
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              className={cn(inputCls, border("service"), "appearance-none pr-11", !form.service && "text-midnight/40")}
            >
              <option value="">Select a service</option>
              {enquiryServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-midnight/40" />
          </div>
        </Field>

        <Field id={id("budget")} label="Budget Range" error={errors.budget}>
          <div className="relative">
            <select
              {...aria("budget")}
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
              className={cn(inputCls, border("budget"), "appearance-none pr-11", !form.budget && "text-midnight/40")}
            >
              <option value="">Select a range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-midnight/40" />
          </div>
        </Field>
        <Field id={id("projectType")} label="Project Type" error={errors.projectType}>
          <div className="relative">
            <select
              {...aria("projectType")}
              value={form.projectType}
              onChange={(e) => set("projectType", e.target.value)}
              className={cn(inputCls, border("projectType"), "appearance-none pr-11", !form.projectType && "text-midnight/40")}
            >
              <option value="">Select a type</option>
              {projectTypes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-midnight/40" />
          </div>
        </Field>

        <Field id={id("message")} label="Message" required error={errors.message} className="sm:col-span-2">
          <textarea
            {...aria("message")}
            rows={5}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className={cn(inputCls, border("message"), "resize-y")}
            placeholder="What would you like to build or improve? Share goals, timelines or anything else helpful."
          />
        </Field>

        {/* Honeypot: hidden from people, tempting for bots */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              name="website"
              value={form.website}
              onChange={(e) => set("website", e.target.value)}
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={id("consent")} className="flex cursor-pointer items-start gap-3">
            <input
              {...aria("consent")}
              type="checkbox"
              checked={form.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-[#A8834F]"
            />
            <span className="text-sm leading-relaxed text-slate">
              I agree that RadixGlide may contact me about this enquiry and process my details as described in the{" "}
              <Link href="/privacy-policy" className="font-semibold text-electric hover:underline">
                Privacy Policy
              </Link>
              .<span className="text-electric">*</span>
            </span>
          </label>
          {errors.consent && (
            <p id={`${id("consent")}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
              <AlertCircle className="size-3.5" aria-hidden /> {errors.consent}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <p className="flex items-center gap-2 font-semibold">
                <AlertCircle className="size-4 shrink-0" /> Something went wrong. Please try again.
              </p>
              {errorCode === "not_configured" && (
                <p className="mt-1.5 text-red-700/80">
                  Online enquiries aren&apos;t connected yet. Please reach us{waFallback ? " on WhatsApp" : " through the contact details on this page"} instead.
                </p>
              )}
              {waFallback && (
                <a
                  href={waFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-red-700 underline-offset-2 hover:underline"
                >
                  <WhatsAppIcon className="size-4" /> Send this enquiry via WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-8 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-navy px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_40px_-8px_rgba(168,131,79,0.7)] hover:brightness-110 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Project Enquiry
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
