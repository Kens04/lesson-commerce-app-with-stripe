import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import initStripe from "stripe";

const getAllPlans = async () => {
  const stripe = new initStripe(process.env.STRIPE_SECRET_KEY!);

  const { data: plans } = await stripe.plans.list();

  return plans;
};

const PricingPage = async () => {
  const plans = await getAllPlans();

  return (
    <div className="w-full max-w-3xl mx-auto py-16 flex justify-around">
      {plans.map((plan) => (
      <Card className="shadow-md" key={plan.id}>
        <CardHeader>
          <CardTitle>月額プラン</CardTitle>
          <CardDescription>Month</CardDescription>
        </CardHeader>
        <CardContent>2500円 / 月</CardContent>
        <CardFooter>
          <Button>サブスクリプション契約する</Button>
        </CardFooter>
      </Card>
      ))}

      {/* <Card className="shadow-md">
        <CardHeader>
          <CardTitle>年額プラン</CardTitle>
          <CardDescription>Month</CardDescription>
        </CardHeader>
        <CardContent>20000円 / 年</CardContent>
        <CardFooter>
          <Button>サブスクリプション契約する</Button>
        </CardFooter>
      </Card> */}
    </div>
  );
};

export default PricingPage;
