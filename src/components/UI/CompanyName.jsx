const CANONICAL_NAME = "FW82 Security Solutions Ltd";
const COMPANY_NAME_PATTERN = /(FW82 Security Solutions Ltd)/gi;

export const CompanyName = () => (
  <span className="company-name">
    <span className="company-name__mark">
      <span className="company-name__red">F</span>
      <span className="company-name__black">W</span>
      <span className="company-name__red">8</span>
      <span className="company-name__black">2</span>
    </span>
    {" Security Solutions Ltd"}
  </span>
);

export const BrandText = ({ text }) => (
  <>
    {text.split(COMPANY_NAME_PATTERN).map((part, index) =>
      part.toLowerCase() === CANONICAL_NAME.toLowerCase()
        ? <CompanyName key={index} />
        : part
    )}
  </>
);
