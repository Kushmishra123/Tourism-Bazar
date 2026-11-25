import { redirect } from 'next/navigation';

export default function DummyTicketRedirect() {
  redirect('/void-ticket');
}
