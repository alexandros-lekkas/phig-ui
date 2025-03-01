import { jsx as _jsx } from "react/jsx-runtime";
import "./globals.css";
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "en", suppressHydrationWarning: true, children: _jsx("body", { children: children }) }));
}
