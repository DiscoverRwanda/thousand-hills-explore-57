
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from "@/components/ui/use-toast";

interface EventBookingProps {
  eventId: string;
  eventName: string;
  eventDate: string;
  ticketInfo: {
    general: string;
    vip: string;
  };
}

export const EventBooking: React.FC<EventBookingProps> = ({
  eventId,
  eventName,
  eventDate,
  ticketInfo,
}) => {
  const { toast } = useToast();
  const [ticketType, setTicketType] = useState<'general' | 'vip'>('general');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Calculate the total price based on ticket type and quantity
  const getTicketPrice = () => {
    const priceText = ticketType === 'general' ? ticketInfo.general : ticketInfo.vip;
    // Extract the numeric value from the price text (e.g., "RWF 50,000" -> 50000)
    const match = priceText.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const totalPrice = getTicketPrice() * quantity;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentForm(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPaymentForm(false);
      
      // Show success toast
      toast({
        title: "Booking Successful!",
        description: `You have successfully booked ${quantity} ${ticketType} ticket(s) for ${eventName}. A confirmation has been sent to ${email}.`,
        duration: 5000,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setCardNumber('');
      setExpiry('');
      setCvv('');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-bold text-lg">Book Tickets</h3>
      </div>
      
      {!showPaymentForm ? (
        <form onSubmit={handleBooking} className="p-4 space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-2 text-rwanda-green" />
              <span className="text-sm text-gray-700">
                {format(new Date(eventDate), 'MMMM d, yyyy')}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ticketType">Ticket Type</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={ticketType === 'general' ? 'default' : 'outline'}
                className={ticketType === 'general' ? 'bg-rwanda-green hover:bg-rwanda-darkGreen' : ''}
                onClick={() => setTicketType('general')}
              >
                General
              </Button>
              <Button
                type="button"
                variant={ticketType === 'vip' ? 'default' : 'outline'}
                className={ticketType === 'vip' ? 'bg-rwanda-green hover:bg-rwanda-darkGreen' : ''}
                onClick={() => setTicketType('vip')}
              >
                VIP
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              {ticketType === 'general' ? ticketInfo.general : ticketInfo.vip}
            </div>
          </div>
          
          <div>
            <Label htmlFor="quantity">Number of Tickets</Label>
            <div className="flex items-center mt-1">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="h-8 w-8 p-0"
              >
                -
              </Button>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-16 mx-2 text-center h-8"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                className="h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div className="pt-2 border-t border-gray-200 mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal ({quantity} ticket{quantity > 1 ? 's' : ''})</span>
              <span>RWF {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>RWF {totalPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen"
          >
            Continue to Payment
          </Button>
        </form>
      ) : (
        <form onSubmit={handlePayment} className="p-4 space-y-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Event</span>
            <span>{eventName}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Total</span>
            <span className="font-bold">RWF {totalPrice.toLocaleString()}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium mb-2">Payment Details</h4>
            
            <div className="space-y-3">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-2 flex space-x-2">
            <Button
              type="button"
              variant="outline"
              className="w-1/2"
              onClick={() => setShowPaymentForm(false)}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="w-1/2 bg-rwanda-green hover:bg-rwanda-darkGreen"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Complete Payment'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
