
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { FileText } from 'lucide-react';

interface Booking {
  id: string;
  type: 'accommodation' | 'tour' | 'event' | 'transport';
  name: string;
  date: Date;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  reference: string;
  price: number;
  currency: string;
}

interface BookingsProps {
  bookings: Booking[];
}

const Bookings: React.FC<BookingsProps> = ({ bookings }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatDate = (date: Date) => {
    return format(date, 'MMM d, yyyy');
  };
  
  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'accommodation': return 'Hotel Booking';
      case 'tour': return 'Tour/Activity';
      case 'event': return 'Event Ticket';
      case 'transport': return 'Transport';
      default: return type;
    }
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Your Bookings</h3>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableCaption>A list of your recent bookings in Rwanda</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Booking Type</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Reference</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{getTypeLabel(booking.type)}</TableCell>
                <TableCell className="font-medium">{booking.name}</TableCell>
                <TableCell>{formatDate(booking.date)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{booking.reference}</TableCell>
                <TableCell>{booking.currency} {booking.price.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4 mr-1" /> Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Bookings;
