import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    const pathname = path.join("/");

    try {
        const result = await get(pathname, { access: "private" });
        if (!result) {
        return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
        }
        return new NextResponse(result.stream, {
            headers: {
                "Content-Type": result.blob.contentType ?? "application/octet-stream",
            },
        });
    } catch {
        return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
    }
}