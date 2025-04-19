import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start min-h-screen pt-[15vh] bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200 bg-white">
        <CardHeader className="flex items-center text-center space-y-2">
          <CheckCircle2 className="text-green-500 w-16 h-16" />
          <CardTitle className="text-3xl font-bold text-gray-800">
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-6 pb-6">
          <p className="text-gray-600 text-sm mb-6">
            Thank you for your purchase! Your order has been placed successfully.
          </p>
          <Button
            onClick={() => navigate("/account")}
            className="w-full bg-black text-white hover:bg-gray-800 transition"
          >
            View My Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaymentSuccessPage;