
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface AccommodationBookingProps {
  accommodationId: string;
  accommodationName: string;
  pricePerNight: number;
  currency: string;
}

export const AccommodationBooking: React.FC<AccommodationBookingProps> = ({
  accommodationId,
  accommodationName,
  pricePerNight,
  currency = 'RWF',
}) => {
  const { toast } = useToast();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Calculate the total price based on nights and rooms
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = pricePerNight * nights * rooms;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Missing dates",
        description: "Please select check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }
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
        description: `Your stay at ${accommodationName} has been confirmed. A confirmation has been sent to ${email}.`,
        duration: 5000,
      });
      
      // Reset form
      setCheckInDate(undefined);
      setCheckOutDate(undefined);
      setGuests(2);
      setRooms(1);
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
        <h3 className="font-bold text-lg">Book Your Stay</h3>
      </div>
      
      {!showPaymentForm ? (
        <form onSubmit={handleBooking} className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn">Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkInDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                    disabled={(date) => date < new Date() || (checkOutDate && date >= checkOutDate)}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkOut">Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOutDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                    disabled={(date) => date <= new Date() || (checkInDate && date <= checkInDate)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="guests">Guests</Label>
              <div className="flex items-center mt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => guests > 1 && setGuests(guests - 1)}
                  className="h-8 w-8 p-0"
                >
                  -
                </Button>
                <Input
                  id="guests"
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-16 mx-2 text-center h-8"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => guests < 10 && setGuests(guests + 1)}
                  className="h-8 w-8 p-0"
                >
                  +
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="rooms">Rooms</Label>
              <div className="flex items-center mt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => rooms > 1 && setRooms(rooms - 1)}
                  className="h-8 w-8 p-0"
                >
                  -
                </Button>
                <Input
                  id="rooms"
                  type="number"
                  min={1}
                  max={5}
                  value={rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value, 10))}
                  className="w-16 mx-2 text-center h-8"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => rooms < 5 && setRooms(rooms + 1)}
                  className="h-8 w-8 p-0"
                >
                  +
                </Button>
              </div>
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
          
          <div className="pt-2 border-t border-gray-200 mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Price per night</span>
              <span>{currency} {pricePerNight.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>{rooms} room{rooms > 1 ? 's' : ''} × {nights} night{nights !== 1 ? 's' : ''}</span>
              <span>{currency} {(pricePerNight * rooms * nights).toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>{currency} {totalPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen"
            disabled={!checkInDate || !checkOutDate}
          >
            Continue to Payment
          </Button>
        </form>
      ) : (
        <form onSubmit={handlePayment} className="p-4 space-y-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Accommodation</span>
              <span>{accommodationName}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-in</span>
              <span>{checkInDate && format(checkInDate, "MMM d, yyyy")}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-out</span>
              <span>{checkOutDate && format(checkOutDate, "MMM d, yyyy")}</span>
            </div>
            <div className="flex justify-between">
              <span>Guests</span>
              <span>{guests}</span>
            </div>
            <div className="flex justify-between">
              <span>Rooms</span>
              <span>{rooms}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>{currency} {totalPrice.toLocaleString()}</span>
            </div>
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
              {isSubmitting ? 'Processing...' : 'Complete Booking'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
