"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Database, 
  BarChart3, 
  Users, 
  Calendar, 
  Mail, 
  FileText, 
  Clock,
  Loader2,
  Check,
  Sparkles,
  ChevronRight,
  Car,
  Palmtree,
  FlaskConical,
  Heart,
  Building2,
  Package,
  TrendingUp,
  MapPin,
  PawPrint,
  Home,
  Clipboard,
  Receipt,
  Star,
  Route,
} from "lucide-react";

// Types
type DemoStage = "idle" | "typing" | "sending" | "thinking" | "tooling" | "responding" | "complete";
type MessageType = "user" | "ai";
type ProductId = "golf-cart-os" | "cabo-concierge" | "batchcraft-os" | "cabo-tails" | "experience-os";

interface Tool {
  name: string;
  nameEn: string;
  icon: React.ElementType;
  status: "pending" | "running" | "complete";
}

interface Message {
  type: MessageType;
  content: React.ReactNode;
  tools?: Tool[];
}

interface DemoMessage {
  userText: string;
  userTextEn: string;
  tools: Tool[];
  response: React.ReactNode;
  responseEn: React.ReactNode;
}

interface Product {
  id: ProductId;
  name: string;
  nameEn: string;
  icon: React.ElementType;
  color: string;
  messages: DemoMessage[];
}

// Content translations
const content = {
  es: {
    title: "Experimente el Poder",
    subtitle: "Selecciona un producto y observa cómo nuestro AI procesa consultas específicas de cada industria.",
    placeholder: "Escribe tu pregunta...",
    thinking: "Analizando solicitud...",
    clickToSend: "Clic para enviar",
    demoComplete: "Demo completada",
    tryAgain: "Reiniciar Demo",
    selectProduct: "Selecciona un Producto",
  },
  en: {
    title: "Experience the Power",
    subtitle: "Select a product and watch how our AI processes industry-specific queries.",
    placeholder: "Type your question...",
    thinking: "Analyzing request...",
    clickToSend: "Click to send",
    demoComplete: "Demo complete",
    tryAgain: "Restart Demo",
    selectProduct: "Select a Product",
  },
};

// Product-specific demo data
const products: Product[] = [
  {
    id: "golf-cart-os",
    name: "Golf Cart OS",
    nameEn: "Golf Cart OS",
    icon: Car,
    color: "text-blue-500",
    messages: [
      {
        userText: "¿Cuáles carritos tienen mantenimiento pendiente esta semana?",
        userTextEn: "Which carts have pending maintenance this week?",
        tools: [
          { name: "Sistema de Flota", nameEn: "Fleet System", icon: Car, status: "pending" },
          { name: "Calendario Mant.", nameEn: "Maintenance Cal.", icon: Calendar, status: "pending" },
        ],
        response: <GolfCartMaintenanceResponse locale="es" />,
        responseEn: <GolfCartMaintenanceResponse locale="en" />,
      },
      {
        userText: "Genera reporte de utilización del mes",
        userTextEn: "Generate this month's utilization report",
        tools: [
          { name: "Motor Analítico", nameEn: "Analytics Engine", icon: BarChart3, status: "pending" },
          { name: "Sistema GPS", nameEn: "GPS System", icon: Route, status: "pending" },
        ],
        response: <GolfCartUtilizationResponse locale="es" />,
        responseEn: <GolfCartUtilizationResponse locale="en" />,
      },
      {
        userText: "¿Qué cliente tiene reserva para mañana a las 10am?",
        userTextEn: "Which client has a reservation tomorrow at 10am?",
        tools: [
          { name: "Sistema Reservas", nameEn: "Booking System", icon: Calendar, status: "pending" },
          { name: "CRM", nameEn: "CRM", icon: Users, status: "pending" },
        ],
        response: <GolfCartBookingResponse locale="es" />,
        responseEn: <GolfCartBookingResponse locale="en" />,
      },
    ],
  },
  {
    id: "cabo-concierge",
    name: "Cabo Concierge AI",
    nameEn: "Cabo Concierge AI",
    icon: Palmtree,
    color: "text-emerald-500",
    messages: [
      {
        userText: "Necesito opciones de venues para boda de 150 personas en diciembre",
        userTextEn: "I need venue options for a 150-person wedding in December",
        tools: [
          { name: "Base Venues", nameEn: "Venue Database", icon: MapPin, status: "pending" },
          { name: "Disponibilidad", nameEn: "Availability", icon: Calendar, status: "pending" },
        ],
        response: <ConciergeVenueResponse locale="es" />,
        responseEn: <ConciergeVenueResponse locale="en" />,
      },
      {
        userText: "Genera itinerario para grupo VIP de 8 personas, 3 días",
        userTextEn: "Generate itinerary for VIP group of 8 people, 3 days",
        tools: [
          { name: "Motor Experiencias", nameEn: "Experience Engine", icon: Star, status: "pending" },
          { name: "Planificador", nameEn: "Planner", icon: Clipboard, status: "pending" },
        ],
        response: <ConciergeItineraryResponse locale="es" />,
        responseEn: <ConciergeItineraryResponse locale="en" />,
      },
      {
        userText: "¿Cuáles son las mejores opciones de catering para evento corporativo?",
        userTextEn: "What are the best catering options for a corporate event?",
        tools: [
          { name: "Red Proveedores", nameEn: "Vendor Network", icon: Users, status: "pending" },
          { name: "Sistema Ratings", nameEn: "Rating System", icon: Star, status: "pending" },
        ],
        response: <ConciergeCateringResponse locale="es" />,
        responseEn: <ConciergeCateringResponse locale="en" />,
      },
    ],
  },
  {
    id: "batchcraft-os",
    name: "BatchCraft OS",
    nameEn: "BatchCraft OS",
    icon: FlaskConical,
    color: "text-amber-500",
    messages: [
      {
        userText: "¿Cuál es el estado del lote #2024-1847?",
        userTextEn: "What's the status of batch #2024-1847?",
        tools: [
          { name: "Trazabilidad", nameEn: "Traceability", icon: Package, status: "pending" },
          { name: "Control Calidad", nameEn: "Quality Control", icon: Clipboard, status: "pending" },
        ],
        response: <BatchStatusResponse locale="es" />,
        responseEn: <BatchStatusResponse locale="en" />,
      },
      {
        userText: "Genera reporte de rendimiento de producción semanal",
        userTextEn: "Generate weekly production yield report",
        tools: [
          { name: "Motor Producción", nameEn: "Production Engine", icon: BarChart3, status: "pending" },
          { name: "Analítica", nameEn: "Analytics", icon: TrendingUp, status: "pending" },
        ],
        response: <BatchProductionResponse locale="es" />,
        responseEn: <BatchProductionResponse locale="en" />,
      },
      {
        userText: "¿Qué materias primas necesitamos reordenar?",
        userTextEn: "Which raw materials do we need to reorder?",
        tools: [
          { name: "Inventario", nameEn: "Inventory", icon: Package, status: "pending" },
          { name: "Sistema Alertas", nameEn: "Alert System", icon: Clock, status: "pending" },
        ],
        response: <BatchInventoryResponse locale="es" />,
        responseEn: <BatchInventoryResponse locale="en" />,
      },
    ],
  },
  {
    id: "cabo-tails",
    name: "Cabo Tails",
    nameEn: "Cabo Tails",
    icon: Heart,
    color: "text-pink-500",
    messages: [
      {
        userText: "Muéstrame perros compatibles para familia con niños y patio",
        userTextEn: "Show me dogs compatible with family with kids and yard",
        tools: [
          { name: "Motor Matching", nameEn: "Matching Engine", icon: Heart, status: "pending" },
          { name: "Perfiles Perritos", nameEn: "Dog Profiles", icon: PawPrint, status: "pending" },
        ],
        response: <TailsMatchingResponse locale="es" />,
        responseEn: <TailsMatchingResponse locale="en" />,
      },
      {
        userText: "¿Cuántas aplicaciones de adopción tenemos pendientes?",
        userTextEn: "How many adoption applications do we have pending?",
        tools: [
          { name: "Cola Adopciones", nameEn: "Adoption Queue", icon: Clipboard, status: "pending" },
          { name: "AI Scoring", nameEn: "AI Scoring", icon: Sparkles, status: "pending" },
        ],
        response: <TailsApplicationsResponse locale="es" />,
        responseEn: <TailsApplicationsResponse locale="en" />,
      },
      {
        userText: "Genera horario de voluntarios para este fin de semana",
        userTextEn: "Generate volunteer schedule for this weekend",
        tools: [
          { name: "Sistema Voluntarios", nameEn: "Volunteer System", icon: Users, status: "pending" },
          { name: "Planificador", nameEn: "Scheduler", icon: Calendar, status: "pending" },
        ],
        response: <TailsVolunteerResponse locale="es" />,
        responseEn: <TailsVolunteerResponse locale="en" />,
      },
    ],
  },
  {
    id: "experience-os",
    name: "Experience OS",
    nameEn: "Experience OS",
    icon: Building2,
    color: "text-violet-500",
    messages: [
      {
        userText: "¿Cuál es la tasa de ocupación de mis propiedades este mes?",
        userTextEn: "What's the occupancy rate of my properties this month?",
        tools: [
          { name: "Motor PropTech", nameEn: "PropTech Engine", icon: Building2, status: "pending" },
          { name: "Analytics", nameEn: "Analytics", icon: BarChart3, status: "pending" },
        ],
        response: <ExperienceOccupancyResponse locale="es" />,
        responseEn: <ExperienceOccupancyResponse locale="en" />,
      },
      {
        userText: "Genera reporte de satisfacción de huéspedes",
        userTextEn: "Generate guest satisfaction report",
        tools: [
          { name: "Sistema Reviews", nameEn: "Review System", icon: Star, status: "pending" },
          { name: "NPS Engine", nameEn: "NPS Engine", icon: TrendingUp, status: "pending" },
        ],
        response: <ExperienceSatisfactionResponse locale="es" />,
        responseEn: <ExperienceSatisfactionResponse locale="en" />,
      },
      {
        userText: "¿Qué propiedades necesitan mantenimiento urgente?",
        userTextEn: "Which properties need urgent maintenance?",
        tools: [
          { name: "Sistema Mant.", nameEn: "Maintenance Sys.", icon: Home, status: "pending" },
          { name: "Alertas", nameEn: "Alerts", icon: Clock, status: "pending" },
        ],
        response: <ExperienceMaintenanceResponse locale="es" />,
        responseEn: <ExperienceMaintenanceResponse locale="en" />,
      },
    ],
  },
];

// ========== RESPONSE COMPONENTS ==========

// Golf Cart OS Responses
function GolfCartMaintenanceResponse({ locale }: { locale: "es" | "en" }) {
  const carts = [
    { id: "GC-012", type: "Golf Cart Pro", status: "urgent", task: locale === "es" ? "Cambio de frenos" : "Brake replacement" },
    { id: "UTV-003", type: "UTV Explorer", status: "scheduled", task: locale === "es" ? "Revisión 500km" : "500km checkup" },
    { id: "GC-007", type: "Golf Cart Pro", status: "scheduled", task: locale === "es" ? "Rotación llantas" : "Tire rotation" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Mantenimiento Pendiente - Semana 48" : "Pending Maintenance - Week 48"}
      </div>
      <div className="space-y-2">
        {carts.map((cart, i) => (
          <motion.div
            key={cart.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${cart.status === "urgent" ? "bg-red-500" : "bg-amber-500"}`} />
              <div>
                <div className="font-mono text-sm">
                  <span className="text-blue-500">{cart.id}</span>
                  <span className="text-[var(--st-text-muted)]"> · </span>
                  <span className="text-green-500">"{cart.type}"</span>
                </div>
                <div className="text-xs text-[var(--st-text-muted)]">{cart.task}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-mono ${cart.status === "urgent" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`}>
              {cart.status === "urgent" ? (locale === "es" ? "Urgente" : "Urgent") : (locale === "es" ? "Programado" : "Scheduled")}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--st-text-muted)] font-mono">
        <Car className="w-3 h-3" />
        {locale === "es" ? "3 unidades requieren atención" : "3 units need attention"}
      </div>
    </div>
  );
}

function GolfCartUtilizationResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Reporte Utilización - Noviembre 2024" : "Utilization Report - November 2024"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--st-primary)]">87%</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Utilización" : "Utilization"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">142</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Rentas" : "Rentals"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">$892K</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Ingresos" : "Revenue"}</div>
          </div>
        </div>
        <div className="h-2 bg-[var(--st-surface-elevated)] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "87%" }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-[var(--st-primary)] to-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-green-500 font-mono">
        <TrendingUp className="w-3 h-3" />
        +12% {locale === "es" ? "vs mes anterior" : "vs last month"}
      </div>
    </div>
  );
}

function GolfCartBookingResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Reserva Encontrada" : "Booking Found"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-[var(--st-primary)]/10 flex items-center justify-center">
            <span className="text-lg font-bold text-[var(--st-primary)]">JM</span>
          </div>
          <div>
            <div className="font-medium"><span className="text-green-500">"Hotel Palmilla"</span></div>
            <div className="text-sm text-[var(--st-text-muted)]">Juan Martinez</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-mono">
          <div><span className="text-[var(--st-text-muted)]">{locale === "es" ? "Fecha:" : "Date:"}</span> <span className="text-blue-500">Mañana 10:00</span></div>
          <div><span className="text-[var(--st-text-muted)]">{locale === "es" ? "Unidad:" : "Unit:"}</span> <span className="text-green-500">GC-015</span></div>
          <div><span className="text-[var(--st-text-muted)]">{locale === "es" ? "Duración:" : "Duration:"}</span> <span className="text-amber-500">4 hrs</span></div>
          <div><span className="text-[var(--st-text-muted)]">{locale === "es" ? "Total:" : "Total:"}</span> <span className="text-[var(--st-primary)]">$2,400</span></div>
        </div>
      </div>
    </div>
  );
}

// Cabo Concierge Responses
function ConciergeVenueResponse({ locale }: { locale: "es" | "en" }) {
  const venues = [
    { name: "Flora Farms", capacity: 200, price: "$150K+", rating: 4.9 },
    { name: "Acre Baja", capacity: 180, price: "$120K+", rating: 4.8 },
    { name: "Villa Santa Cruz", capacity: 160, price: "$95K+", rating: 4.7 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Venues Disponibles - Diciembre" : "Available Venues - December"}
      </div>
      <div className="space-y-2">
        {venues.map((venue, i) => (
          <motion.div
            key={venue.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-green-500">"{venue.name}"</span>
              <span className="flex items-center gap-1 text-xs text-amber-500">
                <Star className="w-3 h-3 fill-current" />{venue.rating}
              </span>
            </div>
            <div className="flex gap-4 text-xs font-mono text-[var(--st-text-muted)]">
              <span><Users className="w-3 h-3 inline mr-1" />{venue.capacity}</span>
              <span className="text-[var(--st-primary)]">{venue.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConciergeItineraryResponse({ locale }: { locale: "es" | "en" }) {
  const days = [
    { day: 1, activities: locale === "es" ? ["Llegada VIP", "Sunset Yacht", "Cena Nick-San"] : ["VIP Arrival", "Sunset Yacht", "Nick-San Dinner"] },
    { day: 2, activities: locale === "es" ? ["Golf Quivira", "Spa Resort", "Tasting Privado"] : ["Golf Quivira", "Resort Spa", "Private Tasting"] },
    { day: 3, activities: locale === "es" ? ["ATV Desert", "Almuerzo Flora", "Checkout"] : ["ATV Desert", "Flora Lunch", "Checkout"] },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Itinerario VIP Generado" : "VIP Itinerary Generated"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] overflow-hidden">
        {days.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="p-3 border-b border-[var(--st-border)] last:border-0"
          >
            <div className="text-xs font-mono text-[var(--st-primary)] mb-2">{locale === "es" ? "Día" : "Day"} {day.day}</div>
            <div className="flex flex-wrap gap-1">
              {day.activities.map((act) => (
                <span key={act} className="px-2 py-1 text-xs rounded bg-[var(--st-surface-elevated)] text-green-500">"{act}"</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConciergeCateringResponse({ locale }: { locale: "es" | "en" }) {
  const caterers = [
    { name: "Tamarindos Catering", type: locale === "es" ? "Alta Cocina" : "Fine Dining", price: "$$$$" },
    { name: "Cabo Catering Co", type: locale === "es" ? "Fusión" : "Fusion", price: "$$$" },
    { name: "Local Flavors BCS", type: locale === "es" ? "Regional" : "Regional", price: "$$" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Top Caterers Corporativos" : "Top Corporate Caterers"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {caterers.map((cat, i) => (
              <motion.tr
                key={cat.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-[var(--st-border)] last:border-0"
              >
                <td className="p-3 text-green-500">"{cat.name}"</td>
                <td className="p-3 text-xs text-[var(--st-text-muted)]">{cat.type}</td>
                <td className="p-3 text-right text-amber-500 font-mono">{cat.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// BatchCraft OS Responses
function BatchStatusResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Estado Lote #2024-1847" : "Batch #2024-1847 Status"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-blue-500">#2024-1847</span>
          <span className="px-2 py-1 rounded text-xs font-mono bg-amber-500/10 text-amber-500">
            {locale === "es" ? "En Fermentación" : "Fermenting"}
          </span>
        </div>
        <div className="space-y-2 text-sm font-mono">
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Inicio:" : "Started:"}</span>
            <span className="text-green-500">2024-11-28 08:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Temp actual:" : "Current temp:"}</span>
            <span className="text-blue-500">24.5°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "pH:" : "pH:"}</span>
            <span className="text-[var(--st-primary)]">4.2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Rendimiento est.:" : "Est. yield:"}</span>
            <span className="text-green-500">94.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BatchProductionResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Producción Semanal" : "Weekly Production"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">12</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Lotes Completados" : "Batches Done"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--st-primary)]">93.8%</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Rendimiento Prom." : "Avg Yield"}</div>
          </div>
        </div>
        <div className="text-xs font-mono text-green-500 flex items-center gap-2">
          <Check className="w-3 h-3" />
          {locale === "es" ? "0 lotes fallidos esta semana" : "0 failed batches this week"}
        </div>
      </div>
    </div>
  );
}

function BatchInventoryResponse({ locale }: { locale: "es" | "en" }) {
  const items = [
    { name: locale === "es" ? "Agave Azul" : "Blue Agave", stock: "15%", status: "critical" },
    { name: locale === "es" ? "Levadura Esp." : "Special Yeast", stock: "28%", status: "low" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Alertas de Inventario" : "Inventory Alerts"}
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3 flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-green-500">"{item.name}"</div>
              <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Stock:" : "Stock:"} <span className={item.status === "critical" ? "text-red-500" : "text-amber-500"}>{item.stock}</span></div>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-mono ${item.status === "critical" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`}>
              {item.status === "critical" ? (locale === "es" ? "Crítico" : "Critical") : (locale === "es" ? "Bajo" : "Low")}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Cabo Tails Responses
function TailsMatchingResponse({ locale }: { locale: "es" | "en" }) {
  const dogs = [
    { name: "Luna", breed: "Golden Mix", score: 94, traits: locale === "es" ? ["Tranquila", "Niños OK"] : ["Calm", "Kid-friendly"] },
    { name: "Rocky", breed: "Lab Mix", score: 89, traits: locale === "es" ? ["Energético", "Patio req."] : ["Energetic", "Yard req."] },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Matches Encontrados" : "Matches Found"}
      </div>
      <div className="space-y-2">
        {dogs.map((dog, i) => (
          <motion.div
            key={dog.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <PawPrint className="w-4 h-4 text-pink-500" />
                <span className="font-medium text-green-500">"{dog.name}"</span>
                <span className="text-xs text-[var(--st-text-muted)]">{dog.breed}</span>
              </div>
              <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/10 text-green-500">{dog.score}% match</span>
            </div>
            <div className="flex gap-1">
              {dog.traits.map((trait) => (
                <span key={trait} className="px-2 py-0.5 text-xs rounded bg-[var(--st-surface-elevated)] text-[var(--st-text-muted)]">{trait}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TailsApplicationsResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Cola de Adopciones" : "Adoption Queue"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-500">8</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Pendientes" : "Pending"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">3</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Pre-aprobadas" : "Pre-approved"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-500">12</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Este mes" : "This month"}</div>
          </div>
        </div>
        <div className="text-xs font-mono text-[var(--st-text-muted)]">
          {locale === "es" ? "3 aplicaciones requieren revisión manual" : "3 applications need manual review"}
        </div>
      </div>
    </div>
  );
}

function TailsVolunteerResponse({ locale }: { locale: "es" | "en" }) {
  const shifts = [
    { day: locale === "es" ? "Sábado AM" : "Saturday AM", volunteers: ["María G.", "Carlos R."] },
    { day: locale === "es" ? "Sábado PM" : "Saturday PM", volunteers: ["Ana L."] },
    { day: locale === "es" ? "Domingo" : "Sunday", volunteers: ["Pedro M.", "Laura S.", "Juan F."] },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Horario Generado" : "Schedule Generated"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] overflow-hidden">
        {shifts.map((shift, i) => (
          <motion.div
            key={shift.day}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 border-b border-[var(--st-border)] last:border-0"
          >
            <div className="text-xs font-mono text-[var(--st-primary)] mb-1">{shift.day}</div>
            <div className="flex flex-wrap gap-1">
              {shift.volunteers.map((v) => (
                <span key={v} className="px-2 py-0.5 text-xs rounded bg-[var(--st-surface-elevated)] text-green-500">{v}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Experience OS Responses
function ExperienceOccupancyResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Ocupación Noviembre" : "November Occupancy"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--st-primary)]">78%</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Ocupación" : "Occupancy"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">$4.2M</div>
            <div className="text-xs text-[var(--st-text-muted)] font-mono">{locale === "es" ? "Ingresos" : "Revenue"}</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-green-500">"Villa Sunset"</span>
            <span className="font-mono text-blue-500">92%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-green-500">"Casa del Mar"</span>
            <span className="font-mono text-blue-500">85%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-green-500">"Penthouse Cabo"</span>
            <span className="font-mono text-amber-500">58%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSatisfactionResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Satisfacción de Huéspedes" : "Guest Satisfaction"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-6 h-6 text-amber-500 fill-current" />
          <span className="text-3xl font-bold">4.8</span>
          <span className="text-[var(--st-text-muted)]">/ 5.0</span>
        </div>
        <div className="space-y-2 text-sm font-mono">
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Limpieza:" : "Cleanliness:"}</span>
            <span className="text-green-500">4.9</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Comunicación:" : "Communication:"}</span>
            <span className="text-green-500">4.8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">{locale === "es" ? "Ubicación:" : "Location:"}</span>
            <span className="text-green-500">4.9</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--st-text-muted)]">NPS:</span>
            <span className="text-[var(--st-primary)]">72</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceMaintenanceResponse({ locale }: { locale: "es" | "en" }) {
  const issues = [
    { property: "Casa del Mar", issue: locale === "es" ? "A/C no enfría" : "A/C not cooling", priority: "high" },
    { property: "Villa Sunset", issue: locale === "es" ? "Filtro piscina" : "Pool filter", priority: "medium" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Mantenimiento Urgente" : "Urgent Maintenance"}
      </div>
      <div className="space-y-2">
        {issues.map((item, i) => (
          <motion.div
            key={item.property}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3 flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-green-500">"{item.property}"</div>
              <div className="text-xs text-[var(--st-text-muted)]">{item.issue}</div>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-mono ${item.priority === "high" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`}>
              {item.priority === "high" ? (locale === "es" ? "Alta" : "High") : (locale === "es" ? "Media" : "Medium")}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Tool Pill Component
function ToolPill({ tool, locale }: { tool: Tool; locale: "es" | "en" }) {
  const Icon = tool.icon;
  const name = locale === "es" ? tool.name : tool.nameEn;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
        tool.status === "complete"
          ? "bg-green-500/10 text-green-500"
          : tool.status === "running"
          ? "bg-[var(--st-primary)]/10 text-[var(--st-primary)]"
          : "bg-[var(--st-surface-elevated)] text-[var(--st-text-muted)]"
      }`}
    >
      {tool.status === "running" ? (
        <Loader2 className="w-3 h-3 animate-spin" />
      ) : tool.status === "complete" ? (
        <Check className="w-3 h-3" />
      ) : (
        <Icon className="w-3 h-3" />
      )}
      {name}
    </motion.div>
  );
}

// Main Demo Component
interface STAIDemoProps {
  locale?: "es" | "en";
}

const STAIDemo = ({ locale = "es" }: STAIDemoProps) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductId>("golf-cart-os");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [stage, setStage] = useState<DemoStage>("idle");
  const [displayedText, setDisplayedText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTools, setCurrentTools] = useState<Tool[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  
  const t = content[locale];
  const product = products.find((p) => p.id === selectedProduct)!;
  const currentDemo = product.messages[currentMessageIndex];
  const userText = locale === "es" ? currentDemo?.userText : currentDemo?.userTextEn;
  const response = locale === "es" ? currentDemo?.response : currentDemo?.responseEn;

  // Reset when product changes
  useEffect(() => {
    setCurrentMessageIndex(0);
    setStage("idle");
    setDisplayedText("");
    setMessages([]);
    setCurrentTools([]);
  }, [selectedProduct]);

  // Typewriter effect
  useEffect(() => {
    if (stage === "typing" && userText) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= userText.length) {
          setDisplayedText(userText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [stage, userText]);

  // Auto-start typing when idle
  useEffect(() => {
    if (stage === "idle" && currentMessageIndex < product.messages.length) {
      const timer = setTimeout(() => {
        setStage("typing");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stage, currentMessageIndex, product.messages.length]);

  // Auto-scroll to bottom when messages or state changes
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, stage, currentTools]);

  // Handle send click
  const handleSend = useCallback(() => {
    if (stage !== "typing" || displayedText !== userText) return;

    setMessages((prev) => [...prev, { type: "user", content: userText }]);
    setStage("sending");
    setDisplayedText("");

    setTimeout(() => {
      setStage("thinking");
    }, 300);

    setTimeout(() => {
      setStage("tooling");
      setCurrentTools(currentDemo.tools.map((t) => ({ ...t, status: "pending" as const })));
    }, 1000);

    currentDemo.tools.forEach((tool, index) => {
      setTimeout(() => {
        setCurrentTools((prev) =>
          prev.map((t, i) => (i === index ? { ...t, status: "running" as const } : t))
        );
      }, 1500 + index * 600);

      setTimeout(() => {
        setCurrentTools((prev) =>
          prev.map((t, i) => (i === index ? { ...t, status: "complete" as const } : t))
        );
      }, 2000 + index * 600);
    });

    const totalToolTime = 2500 + currentDemo.tools.length * 600;
    setTimeout(() => {
      setStage("responding");
      setMessages((prev) => [
        ...prev,
        { type: "ai", content: response, tools: currentDemo.tools.map((t) => ({ ...t, status: "complete" as const })) },
      ]);
      setCurrentTools([]);
    }, totalToolTime);

    setTimeout(() => {
      if (currentMessageIndex < product.messages.length - 1) {
        setCurrentMessageIndex((prev) => prev + 1);
        setStage("idle");
      } else {
        setStage("complete");
      }
    }, totalToolTime + 500);
  }, [stage, displayedText, userText, currentDemo, response, currentMessageIndex, product.messages.length]);

  // Reset demo
  const handleReset = () => {
    setCurrentMessageIndex(0);
    setStage("idle");
    setDisplayedText("");
    setMessages([]);
    setCurrentTools([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          {t.title} <span className="st-gradient-text">AI</span>
        </h3>
        <p className="text-[var(--st-text-secondary)] max-w-xl mx-auto text-sm">
          {t.subtitle}
        </p>
      </div>

      {/* Main Container - Product Selection + Chat */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Product Selection */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="text-xs font-mono text-[var(--st-text-muted)] uppercase tracking-wider mb-3">
              {t.selectProduct}
            </div>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {products.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedProduct === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-[var(--st-primary)]/10 border-[var(--st-primary)] text-[var(--st-primary)]"
                        : "bg-[var(--st-surface)] border-[var(--st-border)] text-[var(--st-text-secondary)] hover:border-[var(--st-primary)]/50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? p.color : ""}`} />
                    <span className="text-sm font-medium">{locale === "es" ? p.name : p.nameEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex-1">
            <div className="bg-[var(--st-surface)] rounded-2xl border border-[var(--st-border)] overflow-hidden shadow-xl">
              {/* Chat Header */}
              <div className="bg-[var(--st-surface-elevated)] border-b border-[var(--st-border)] px-4 py-3 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center`}>
                  {React.createElement(product.icon, { className: `w-4 h-4 ${product.color}` })}
                </div>
                <div>
                  <div className="text-sm font-medium">{locale === "es" ? product.name : product.nameEn}</div>
                  <div className="text-xs text-[var(--st-text-muted)] font-mono">
                    {locale === "es" ? "Asistente AI" : "AI Assistant"}
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-500 font-mono">
                    {locale === "es" ? "En línea" : "Online"}
                  </span>
                </div>
              </div>

              {/* Messages Area */}
              <div 
                ref={messagesContainerRef}
                className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-4"
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.type === "user" ? (
                        <div className="bg-[var(--st-primary)] !text-white dark:!text-black rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                          <p className="text-sm">{message.content}</p>
                        </div>
                      ) : (
                        <div className="flex gap-3 max-w-[90%]">
                          <div className={`w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0`}>
                            {React.createElement(product.icon, { className: `w-4 h-4 ${product.color}` })}
                          </div>
                          <div className="bg-[var(--st-surface-elevated)] rounded-2xl rounded-tl-sm px-4 py-3 border border-[var(--st-border)]">
                            {message.tools && (
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {message.tools.map((tool, i) => (
                                  <ToolPill key={i} tool={tool} locale={locale} />
                                ))}
                              </div>
                            )}
                            {message.content}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Thinking State */}
                  {stage === "thinking" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(product.icon, { className: `w-4 h-4 ${product.color}` })}
                      </div>
                      <div className="bg-[var(--st-surface-elevated)] rounded-2xl rounded-tl-sm px-4 py-3 border border-[var(--st-border)]">
                        <div className="flex items-center gap-2 text-sm text-[var(--st-text-muted)]">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t.thinking}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tooling State */}
                  {stage === "tooling" && currentTools.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(product.icon, { className: `w-4 h-4 ${product.color}` })}
                      </div>
                      <div className="bg-[var(--st-surface-elevated)] rounded-2xl rounded-tl-sm px-4 py-3 border border-[var(--st-border)]">
                        <div className="text-xs text-[var(--st-text-muted)] mb-2 font-mono">
                          {locale === "es" ? "Ejecutando herramientas..." : "Running tools..."}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentTools.map((tool, i) => (
                            <ToolPill key={i} tool={tool} locale={locale} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="border-t border-[var(--st-border)] p-4">
                {stage === "complete" ? (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleReset}
                    className="w-full py-3 rounded-xl bg-[var(--st-primary)]/10 text-[var(--st-primary)] font-medium flex items-center justify-center gap-2 hover:bg-[var(--st-primary)]/20 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {t.tryAgain}
                  </motion.button>
                ) : (
                  <div
                    onClick={handleSend}
                    className={`relative rounded-xl border transition-all ${
                      stage === "typing" && displayedText === userText
                        ? "border-[var(--st-primary)] bg-[var(--st-primary)]/5 cursor-pointer hover:bg-[var(--st-primary)]/10"
                        : "border-[var(--st-border)] bg-[var(--st-surface-elevated)]"
                    }`}
                  >
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex-1 min-h-[24px]">
                        {displayedText ? (
                          <span className="text-sm">{displayedText}</span>
                        ) : (
                          <span className="text-sm text-[var(--st-text-muted)]">{t.placeholder}</span>
                        )}
                        {stage === "typing" && displayedText !== userText && (
                          <span className="inline-block w-0.5 h-4 bg-[var(--st-primary)] animate-pulse ml-0.5" />
                        )}
                      </div>
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          stage === "typing" && displayedText === userText
                            ? "bg-[var(--st-primary)] !text-white dark:!text-black"
                            : "bg-[var(--st-border)] text-[var(--st-text-muted)]"
                        }`}
                      >
                        <Send className="w-4 h-4" />
                      </div>
                    </div>
                    {stage === "typing" && displayedText === userText && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -bottom-6 left-0 right-0 text-center"
                      >
                        <span className="text-xs text-[var(--st-primary)] font-medium">
                          {t.clickToSend}
                        </span>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default STAIDemo;
