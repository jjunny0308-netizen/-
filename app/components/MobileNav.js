"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "병원소개" },
  { href: "/doctors", label: "의료진" },
  { href: "/collaboration", label: "협진 진료" },
  { href: "/departments", label: "진료과목" },
  { href: "/guide", label: "진료안내" },
  { href: "/location", label: "오시는길" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className={"hamburger" + (open ? " open" : "")}
        onClick={() => setOpen((v) => !v)}
        role="button"
        aria-label="메뉴 열기"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>

      {open && (
        <div className="mobile-menu">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
