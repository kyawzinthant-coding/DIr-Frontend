import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { Icons } from '@/components/icons';
import { ScrollArea } from '../ui/scroll-area';
import useCartStore from '@/store/cartStore';
import { Card, CardContent } from '../ui/card';

export default function CartSheet() {
  const { items } = useCartStore.getState();
  const { removeItem } = useCartStore();
  const itemCount = items.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative cursor-pointer"
          aria-label="Open cart"
        >
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader className="flex   h-10 w-full">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator className="" />
        {items.length > 0 ? (
          <>
            <ScrollArea className="my-2 h-[74vh] pb-8 p-6">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 mb-4 h-full rounded-xl flex "
                >
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 ">
                      <img
                        src={item.previewImage.url}
                        alt={item.name}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="size-18 rounded"
                      />
                      <div className="ml-4">
                        <div className="font-medium">{item.name}</div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="cursor-pointer bg-red-100 "
                      aria-label="Remove from cart"
                      onClick={() => removeItem(item.id)}
                    >
                      <Icons.trash
                        className="size-4 text-red-400 "
                        aria-hidden="true"
                      />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>

            <div className="space-y-4 absolute bottom-0 w-full  p-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>
                    {items.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    type="submit"
                    asChild
                    className="w-full cursor-pointer"
                  >
                    <Link to="/checkout" aria-label="Check out">
                      Continue to checkout
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.cart className="mb-4 size-16 text-muted-foreground" />
            <div className="text-xl font-medium text-muted-foreground">
              Your cart is empty
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
