// app/(app)/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sprout, Home, Leaf, Settings as Cog } from "lucide-react";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-dvh flex bg-background text-foreground">
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r">
                <div className="h-14 flex items-center gap-2 px-4">
                    <Sprout className="h-5 w-5" />
                    <span className="font-semibold">Plant Care</span>
                </div>
                <Separator />
                <nav className="flex-1 p-2">
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent"
                            >
                                <Home className="h-4 w-4" /> Today
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/plants"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent"
                            >
                                <Leaf className="h-4 w-4" /> Plants
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/settings"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent"
                            >
                                <Cog className="h-4 w-4" /> Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-3">
                    <Link href="/plants/new" className="w-full">
                        <Button className="w-full">+ Add plant</Button>
                    </Link>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="h-14 px-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-semibold">Today</h1>
                        {/* сюда можно встраивать динамический сабтайтл, например дату */}
                    </div>
                    <div className="flex items-center gap-2">
                        {/* фильтры/поиск/кнопки */}
                        <Link href="/plants/new"><Button size="sm">Add plant</Button></Link>
                    </div>
                </header>

                {/* Content */}
                <main className="p-4">{children}</main>
            </div>

            {/* Mobile bottom bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background grid grid-cols-3">
                <Link href="/dashboard" className="py-2 text-center">Today</Link>
                <Link href="/plants" className="py-2 text-center">Plants</Link>
                <Link href="/settings" className="py-2 text-center">Settings</Link>
            </nav>
        </div>
    );
}
