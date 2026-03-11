import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";

import StoreProvider from "./StoreProvider";
import ProtectedRoute from "./ProtectedRoute";
export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <ProtectedRoute>
        <div id="wd-kambaz">
          <div className="d-flex">
            <div className="d-none d-md-block bg-black">
              <KambazNavigation />
            </div>
            <div className="wd-main-content-offset p-3 flex-fill">
              {children}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </StoreProvider>
  );
}
