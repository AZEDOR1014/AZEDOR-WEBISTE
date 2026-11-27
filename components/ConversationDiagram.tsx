import { Bot, Calendar, CalendarCheck, CheckCircle2, Clock, User } from "lucide-react";
import { AI_CHANNELS } from "@/lib/data";

/** One accent per channel (icon colour + soft chip background). */
const ACCENTS: Record<string, { main: string; soft: string }> = {
  "Website chat": { main: "#0EA5E9", soft: "#E8F4FD" },
  WhatsApp: { main: "#10B981", soft: "#E6F7F4" },
  SMS: { main: "#65A30D", soft: "#F4FBEA" },
  Email: { main: "#F59E0B", soft: "#FFF8E6" },
  Facebook: { main: "#0EA5E9", soft: "#E8F4FD" },
  Instagram: { main: "#FB7185", soft: "#FFF0F3" },
  Threads: { main: "#8B7CF6", soft: "#EFEDFD" },
};

const LEFT = ["Website chat", "WhatsApp", "SMS"];
const RIGHT = ["Email", "Facebook", "Instagram", "Threads"];

function ChannelBox({ name, align }: { name: string; align: "left" | "right" }) {
  const c = AI_CHANNELS.find((x) => x.name === name);
  if (!c) return null;
  const a = ACCENTS[name] ?? { main: "#101211", soft: "#F5F7F4" };
  const I = c.icon;
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: a.soft, color: a.main }}>
        <I size={20} strokeWidth={2.5} />
      </span>
      <span className="text-sm font-extrabold leading-tight text-ink sm:text-base">{name}</span>
      {align === "left" && <span className="ml-auto hidden h-0.5 w-8 shrink-0 bg-ink/70 lg:block" aria-hidden />}
      {align === "right" && <span className="mr-auto hidden h-0.5 w-8 shrink-0 bg-ink/70 lg:block" aria-hidden />}
    </div>
  );
}

/** Mini month calendar: the 15th is the booked day. */
function MiniCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const cells: (number | null)[] = [null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-lime"><Calendar size={15} /> Appointment</p>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-mutedDark">
        {days.map((d, i) => (<span key={i}>{d}</span>))}
        {cells.map((n, i) => (
          <span key={i} className={n === 15 ? "flex h-6 w-6 items-center justify-center rounded-full bg-lime font-extrabold text-ink" : "flex h-6 w-6 items-center justify-center"}>
            {n ?? ""}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Conversation AI Agent diagram, built like the reference image Ali supplied:
 * central Conversation AI Assistant box, channels connected to it by lines with dots,
 * and an appointment calendar + confirmed panel underneath.
 * Pure HTML/CSS — no raster image, so the text stays sharp.
 */
export default function ConversationDiagram() {
  return (
    <div className="rounded-card border border-line bg-paper p-4 sm:p-8">
      {/* Desktop: channels left/right of the centre box. Mobile: centre first, then channels. */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
        {/* Left channels */}
        <div className="order-2 flex flex-col gap-3 lg:order-1 lg:pr-0">
          {LEFT.map((n) => (
            <div key={n} className="flex items-center gap-0">
              <div className="flex-1"><ChannelBox name={n} align="left" /></div>
              <span className="hidden h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-lime lg:block" aria-hidden />
            </div>
          ))}
        </div>

        {/* Centre: Conversation AI Assistant */}
        <div className="order-1 mx-auto w-full max-w-[240px] lg:order-2">
          <div className="rounded-3xl border-2 border-lime bg-ink px-6 py-8 text-center text-white shadow-lg">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80"><Bot size={36} className="text-white" /></span>
            <p className="mt-4 text-xl font-extrabold leading-tight text-lime">Conversation AI</p>
            <p className="text-2xl font-extrabold leading-tight">Assistant</p>
            <p className="mt-3 text-xs leading-relaxed text-mutedDark">Answers, qualifies<br />and books — 24/7</p>
          </div>
          <span className="mx-auto mt-4 hidden h-3 w-3 rounded-full border-2 border-ink bg-lime lg:block" aria-hidden />
        </div>

        {/* Right channels */}
        <div className="order-3 flex flex-col gap-3">
          {RIGHT.map((n) => (
            <div key={n} className="flex items-center gap-0">
              <span className="hidden h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-lime lg:block" aria-hidden />
              <div className="flex-1"><ChannelBox name={n} align="right" /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment panels */}
      <div className="mx-auto mt-8 grid max-w-2xl gap-0 overflow-hidden rounded-2xl bg-ink text-white shadow-lg sm:grid-cols-2">
        <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
          <MiniCalendar />
        </div>
        <div className="p-5">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-lime"><CheckCircle2 size={16} /> Appointment confirmed</p>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2"><CalendarCheck size={16} className="text-lime" /> Fri, 15 Nov</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-lime" /> 10:30 AM</li>
            <li className="flex items-center gap-2"><User size={16} className="text-lime" /> Booked by the Conversation AI Agent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
