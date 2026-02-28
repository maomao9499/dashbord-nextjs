export default async function InvoicesPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Invoices Page</p>;
}
