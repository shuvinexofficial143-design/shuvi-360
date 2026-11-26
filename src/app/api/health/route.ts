export const dynamic = "force-dynamic";
export function GET() {
  return Response.json({ status: "ok", service: "shuvi-360", scope: "application-only", database: "not-configured" }, { headers: { "Cache-Control": "no-store" } });
}
