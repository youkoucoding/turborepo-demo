import { HelpPanel } from "@cloudscape-design/components";

const toolsFooter = (
  <ExternalLinkGroup
    items={[
      {
        text: "Working with distributions",
        href: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html",
      },
      {
        text: "Values that CloudFront displays on the console",
        href: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-returned.html",
      },
    ]}
  />
);

function ToolsContent() {
  return (
    <HelpPanel footer={toolsFooter} header={<h2>Distributions</h2>}>
      <p>
        View your current distributions and related information such as the
        associated domain names, delivery methods, SSL certificates, and more.
        To drill down even further into the details, choose the name of an
        individual distribution.
      </p>
    </HelpPanel>
  );
}

export default ToolsContent;
