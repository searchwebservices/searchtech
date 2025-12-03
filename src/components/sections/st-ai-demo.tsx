"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  ChevronRight
} from "lucide-react";

// Types
type DemoStage = "idle" | "typing" | "sending" | "thinking" | "tooling" | "responding" | "complete";
type MessageType = "user" | "ai";

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

// Content translations
const content = {
  es: {
    title: "Experimente el Poder",
    subtitle: "Haga clic en el campo de texto para enviar cada mensaje y ver cómo nuestro AI procesa su solicitud.",
    placeholder: "Escriba su pregunta...",
    thinking: "Analizando solicitud...",
    clickToSend: "Clic para enviar",
    demoComplete: "Demo completada",
    tryAgain: "Reiniciar Demo",
  },
  en: {
    title: "Experience the Power",
    subtitle: "Click the text field to send each message and see how our AI processes your request.",
    placeholder: "Type your question...",
    thinking: "Analyzing request...",
    clickToSend: "Click to send",
    demoComplete: "Demo complete",
    tryAgain: "Restart Demo",
  },
};

// Demo messages data
const demoMessages: DemoMessage[] = [
  {
    userText: "¿Cuáles fueron nuestros 3 productos más vendidos este mes?",
    userTextEn: "What were our top 3 products this month?",
    tools: [
      { name: "Consulta BD", nameEn: "Database Query", icon: Database, status: "pending" },
      { name: "Motor Analítico", nameEn: "Analytics Engine", icon: BarChart3, status: "pending" },
    ],
    response: <ProductTableResponse locale="es" />,
    responseEn: <ProductTableResponse locale="en" />,
  },
  {
    userText: "¿Qué clientes no han ordenado en 30 días?",
    userTextEn: "Which clients haven't ordered in 30 days?",
    tools: [
      { name: "Consulta CRM", nameEn: "CRM Query", icon: Users, status: "pending" },
      { name: "Filtro Fecha", nameEn: "Date Filter", icon: Calendar, status: "pending" },
    ],
    response: <ClientListResponse locale="es" />,
    responseEn: <ClientListResponse locale="en" />,
  },
  {
    userText: "Genera una campaña de re-engagement para estos clientes",
    userTextEn: "Generate a re-engagement campaign for these clients",
    tools: [
      { name: "Servicio Email", nameEn: "Email Service", icon: Mail, status: "pending" },
      { name: "Motor Plantillas", nameEn: "Template Engine", icon: FileText, status: "pending" },
      { name: "Programador", nameEn: "Scheduler", icon: Clock, status: "pending" },
    ],
    response: <CampaignPreviewResponse locale="es" />,
    responseEn: <CampaignPreviewResponse locale="en" />,
  },
];

// Response Components
function ProductTableResponse({ locale }: { locale: "es" | "en" }) {
  const products = [
    { name: "Golf Cart Pro X", units: 47, revenue: "$892,340" },
    { name: "UTV Explorer 450", units: 32, revenue: "$640,000" },
    { name: "E-Bike Coastal", units: 28, revenue: "$196,000" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Top 3 Productos - Noviembre 2024" : "Top 3 Products - November 2024"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--st-border)] bg-[var(--st-surface-elevated)]">
              <th className="text-left p-3 font-mono text-xs text-[var(--st-text-muted)]">
                {locale === "es" ? "Producto" : "Product"}
              </th>
              <th className="text-right p-3 font-mono text-xs text-[var(--st-text-muted)]">
                {locale === "es" ? "Unidades" : "Units"}
              </th>
              <th className="text-right p-3 font-mono text-xs text-[var(--st-text-muted)]">
                {locale === "es" ? "Ingresos" : "Revenue"}
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <motion.tr
                key={product.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-[var(--st-border)] last:border-0"
              >
                <td className="p-3">
                  <span className="text-green-500 dark:text-green-400">"{product.name}"</span>
                </td>
                <td className="p-3 text-right font-mono text-blue-500 dark:text-blue-400">
                  {product.units}
                </td>
                <td className="p-3 text-right font-mono text-[var(--st-primary)]">
                  {product.revenue}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--st-text-muted)] font-mono">
        <Check className="w-3 h-3 text-green-500" />
        {locale === "es" ? "3 registros encontrados" : "3 records found"}
      </div>
    </div>
  );
}

function ClientListResponse({ locale }: { locale: "es" | "en" }) {
  const clients = [
    { name: "Hotel Palmilla", lastOrder: "Oct 15", days: 45 },
    { name: "Cabo Adventures", lastOrder: "Oct 22", days: 38 },
    { name: "Marina Fiesta", lastOrder: "Nov 1", days: 32 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Clientes Inactivos (+30 días)" : "Inactive Clients (+30 days)"}
      </div>
      <div className="space-y-2">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--st-primary)]/10 flex items-center justify-center">
                <span className="text-xs font-bold text-[var(--st-primary)]">
                  {client.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-sm">
                  <span className="text-green-500 dark:text-green-400">"{client.name}"</span>
                </div>
                <div className="text-xs font-mono text-[var(--st-text-muted)]">
                  {locale === "es" ? "Último pedido" : "Last order"}: 
                  <span className="text-blue-500 dark:text-blue-400 ml-1">{client.lastOrder}</span>
                  <span className="text-orange-500 dark:text-orange-400 ml-2">({client.days}d)</span>
                </div>
              </div>
            </div>
            <button className="px-3 py-1.5 text-xs font-mono bg-[var(--st-primary)]/10 text-[var(--st-primary)] rounded-md hover:bg-[var(--st-primary)]/20 transition-colors">
              {locale === "es" ? "Recordar" : "Remind"}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--st-text-muted)] font-mono">
        <Users className="w-3 h-3" />
        {locale === "es" ? "3 clientes requieren atención" : "3 clients need attention"}
      </div>
    </div>
  );
}

function CampaignPreviewResponse({ locale }: { locale: "es" | "en" }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--st-primary)]">
        <span className="text-[var(--st-text-muted)]">{"// "}</span>
        {locale === "es" ? "Campaña Generada" : "Generated Campaign"}
      </div>
      <div className="bg-[var(--background)] rounded-lg border border-[var(--st-border)] overflow-hidden">
        <div className="p-3 border-b border-[var(--st-border)] bg-[var(--st-surface-elevated)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--st-text-muted)]">
              {locale === "es" ? "Asunto:" : "Subject:"}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-500 font-mono">
              {locale === "es" ? "Listo" : "Ready"}
            </span>
          </div>
          <div className="mt-1 text-sm text-green-500 dark:text-green-400">
            "{locale === "es" 
              ? "¡Te extrañamos! Ofertas especiales esperándote" 
              : "We miss you! Special offers waiting for you"}"
          </div>
        </div>
        <div className="p-3 space-y-2">
          <div className="text-xs font-mono text-[var(--st-text-muted)]">
            {locale === "es" ? "Plantilla:" : "Template:"}
          </div>
          <div className="bg-[var(--st-surface)] rounded p-2 text-xs font-mono">
            <span className="text-purple-500">{"{"}</span>
            <span className="text-[var(--st-text-muted)]">client_name</span>
            <span className="text-purple-500">{"}"}</span>
            <span className="text-[var(--st-text-secondary)]">, </span>
            <span className="text-green-500 dark:text-green-400">
              {locale === "es" 
                ? "\"Han pasado {days} días...\"" 
                : "\"It's been {days} days...\""}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--st-text-muted)]">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span className="text-blue-500 dark:text-blue-400">3</span> {locale === "es" ? "destinatarios" : "recipients"}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {locale === "es" ? "Programado: Mañana 9:00 AM" : "Scheduled: Tomorrow 9:00 AM"}
            </div>
          </div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full py-2.5 rounded-lg bg-[var(--st-primary)] text-[var(--primary-foreground)] text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <Mail className="w-4 h-4" />
        {locale === "es" ? "Confirmar y Programar Campaña" : "Confirm & Schedule Campaign"}
      </motion.button>
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
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [stage, setStage] = useState<DemoStage>("idle");
  const [displayedText, setDisplayedText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTools, setCurrentTools] = useState<Tool[]>([]);
  
  const t = content[locale];
  const currentDemo = demoMessages[currentMessageIndex];
  const userText = locale === "es" ? currentDemo?.userText : currentDemo?.userTextEn;
  const response = locale === "es" ? currentDemo?.response : currentDemo?.responseEn;

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
    if (stage === "idle" && currentMessageIndex < demoMessages.length) {
      const timer = setTimeout(() => {
        setStage("typing");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stage, currentMessageIndex]);

  // Handle send click
  const handleSend = useCallback(() => {
    if (stage !== "typing" || displayedText !== userText) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: userText }]);
    setStage("sending");
    setDisplayedText("");

    // Simulate thinking
    setTimeout(() => {
      setStage("thinking");
    }, 300);

    // Start tooling
    setTimeout(() => {
      setStage("tooling");
      setCurrentTools(currentDemo.tools.map((t) => ({ ...t, status: "pending" as const })));
    }, 1000);

    // Animate tools
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

    // Show response
    const totalToolTime = 2500 + currentDemo.tools.length * 600;
    setTimeout(() => {
      setStage("responding");
      setMessages((prev) => [
        ...prev,
        { type: "ai", content: response, tools: currentDemo.tools.map((t) => ({ ...t, status: "complete" as const })) },
      ]);
      setCurrentTools([]);
    }, totalToolTime);

    // Move to next message or complete
    setTimeout(() => {
      if (currentMessageIndex < demoMessages.length - 1) {
        setCurrentMessageIndex((prev) => prev + 1);
        setStage("idle");
      } else {
        setStage("complete");
      }
    }, totalToolTime + 500);
  }, [stage, displayedText, userText, currentDemo, response, currentMessageIndex]);

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

      {/* Chat Container */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-[var(--st-surface)] rounded-2xl border border-[var(--st-border)] overflow-hidden shadow-xl">
          {/* Chat Header */}
          <div className="bg-[var(--st-surface-elevated)] border-b border-[var(--st-border)] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--st-primary)] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[var(--primary-foreground)]" />
            </div>
            <div>
              <div className="text-sm font-medium">Search Tech AI</div>
              <div className="text-xs text-[var(--st-text-muted)] font-mono">
                {locale === "es" ? "Asistente de Negocios" : "Business Assistant"}
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
          <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-4">
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
                    <div className="bg-[var(--st-primary)] text-[var(--primary-foreground)] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ) : (
                    <div className="flex gap-3 max-w-[90%]">
                      <div className="w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-[var(--st-primary)]" />
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
                  <div className="w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[var(--st-primary)]" />
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
                  <div className="w-8 h-8 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[var(--st-primary)]" />
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
                        ? "bg-[var(--st-primary)] text-[var(--primary-foreground)]"
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
    </motion.div>
  );
};

export default STAIDemo;

