import ClientPortal from "@/utils/ClientPortal";
import { twclsx } from "@/utils/twclsx";
import { useCallback, useEffect, useRef } from "react";

interface IDrawerProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isFullScreen?: boolean;
  customStyle?: string;
  containerId: string;
}

function Drawer({
  opened,
  children,
  onClose,
  isFullScreen = false,
  customStyle,
  containerId,
}: IDrawerProps) {
  {
  }
  const bodyRef = useRef<HTMLElement>(); // ref to the body Tag

  /** Attaches Body Ref to Body Container on Client Side*/

  if (typeof window !== "undefined") {
    bodyRef.current = document.getElementById(containerId)! as HTMLElement;
  }

  {
    /** This effect prevents the scroll of the body undreneath of the drawer when the drawer is open */
  }

  const keyListener = useCallback((e: KeyboardEvent & { keyCode: number }) => {
    if (e.key === "Escape") onClose();
  }, []);

  useEffect(() => {
    if (opened) {
      document.addEventListener("keydown", keyListener);
      document.getElementById("body")!.classList.add("block-scroll");
    }
    if (!opened) {
      document.removeEventListener("keydown", keyListener);
      document.getElementById("body")!.classList.remove("block-scroll");
    }
  }, [opened]);

  return (
    <ClientPortal selector={containerId}>
      <div id="drawer-portal" aria-hidden={!opened}>
        {/** Drawer container starts here */}
        <div
          className={twclsx(
            "max-w-screen fixed inset-y-0 z-[999] w-screen overflow-y-auto bg-[#1d1b29] duration-300 -translate-y-full",
            isFullScreen && "w-full",

            opened && "translate-y-0",
            customStyle
          )}
        >
          {/** Drawer Contents are placed here */}
          {children}
        </div>

        {/** Drawer Container Ends */}

        {/** Backdrop starts here */}
        <div
          onClick={(e) => {
            onClose();
            e.stopPropagation();
          }}
          className={twclsx(
            "pointer-events-none invisible fixed top-0 left-0 z-[998] h-full w-full bg-black bg-opacity-50 opacity-0 duration-300 ",
            opened && "pointer-events-auto visible  opacity-100"
          )}
        />
        {/** Backdrop ends here */}
      </div>
    </ClientPortal>
  );
}

export default Drawer;
