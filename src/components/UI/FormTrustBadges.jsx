import { TrustBadge } from "./TrustBadge";

export const FormTrustBadges = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <TrustBadge label="PSRA Licensed" />
      <TrustBadge label="ISO Certified" />
      <TrustBadge label="Data Protected" />
    </div>
  );
};
