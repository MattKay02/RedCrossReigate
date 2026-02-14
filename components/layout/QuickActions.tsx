"use client";

import Link from "next/link";
import {
  PinRightIcon,
  GlobeIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";
import { PUB_INFO } from "@/lib/data/hours";

const actions = [
  {
    label: "Directions",
    href: PUB_INFO.googleMapsUrl,
    icon: PinRightIcon,
    external: true,
  },
  {
    label: "Drinks",
    href: "/drinks",
    icon: GlobeIcon,
    external: false,
  },
  {
    label: "What's On",
    href: "/whats-on",
    icon: CalendarIcon,
    external: false,
  },
];

export function QuickActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-dark/95 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          const Component = action.external ? "a" : Link;
          const extraProps = action.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Component
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1 py-3 text-light/80 transition-colors hover:text-secondary"
              {...extraProps}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium uppercase tracking-wider">
                {action.label}
              </span>
            </Component>
          );
        })}
      </div>
    </div>
  );
}
