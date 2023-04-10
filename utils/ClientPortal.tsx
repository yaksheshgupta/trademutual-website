import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientPortal({
  children,
  selector,
}: {
  children: React.ReactNode;
  selector: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [selector]);

  return mounted
    ? createPortal(children, document.getElementById(selector) as Element)
    : null;
}
