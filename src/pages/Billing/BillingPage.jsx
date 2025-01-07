import OrderSummary from '../../components/Order/OrderSummary';
import { BillingForm } from './../../components/billing/BillingForm';

const BillingPage = () => {
    return (
        <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <BillingForm />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};

export default BillingPage;
