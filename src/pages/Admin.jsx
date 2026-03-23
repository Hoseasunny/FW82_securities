import { useState } from "react";
import { Button } from "../components/UI/Button";
import { Seo } from "../components/SEO/Seo";

const PIN = "FW82ADMIN";

export const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [pin, setPin] = useState("");
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.fw82securitysolutions.com";

  const inquiries = JSON.parse(window.localStorage.getItem("fw82-inquiries") || "[]");
  const applications = JSON.parse(window.localStorage.getItem("fw82-applications") || "[]");

  const handleLogin = (event) => {
    event.preventDefault();
    if (pin === PIN) setAuthorized(true);
  };

  return (
    <>
      <Seo
        title="Admin | FW82 Security"
        description="Admin dashboard."
        pathname="/admin"
        noindex
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Admin",
              item: `${siteUrl}/admin`
            }
          ]
        }}
      />
      <main className="bg-cloud min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl font-heading font-bold text-ink">Admin Dashboard</h1>
          {!authorized ? (
            <form onSubmit={handleLogin} className="mt-8 rounded-3xl bg-white p-8 shadow-soft">
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Enter PIN</span>
                <input
                  type="password"
                  value={pin}
                  onChange={(event) => setPin(event.target.value)}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                />
              </label>
              <Button type="submit" className="mt-6">
                Unlock
              </Button>
            </form>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-heading font-semibold text-ink">Inquiries</h2>
                <div className="mt-4 space-y-3 text-sm text-slate">
                  {inquiries.length === 0 && <p>No inquiries yet.</p>}
                  {inquiries.map((item, index) => (
                    <div key={`${item.email}-${index}`} className="rounded-2xl border border-slate/10 p-4">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p>{item.email}</p>
                      <p>{item.phone}</p>
                      <p className="text-xs text-slate">{item.submittedAt}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-heading font-semibold text-ink">Applications</h2>
                <div className="mt-4 space-y-3 text-sm text-slate">
                  {applications.length === 0 && <p>No applications yet.</p>}
                  {applications.map((item, index) => (
                    <div key={`${item.fullName}-${index}`} className="rounded-2xl border border-slate/10 p-4">
                      <p className="font-semibold text-ink">{item.fullName}</p>
                      <p>{item.phone}</p>
                      <p>{item.position}</p>
                      <p className="text-xs text-slate">{item.submittedAt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
