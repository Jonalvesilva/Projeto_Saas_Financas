"use client";
import { useUser } from "@clerk/nextjs";
import createCheckout from "../subscription/_actions/create-checkout";
import { Button } from "./ui/button";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

interface PlansPricing {
  numberTransaction?: string;
}

export default function PlansPricing({ numberTransaction }: PlansPricing) {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createCheckout();

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("Stripe not found");
    }

    await stripe.redirectToCheckout({ sessionId });
  };

  const { user } = useUser();
  const hasPremium = user?.publicMetadata.subscriptionPlan == "premium";

  return (
    <div className="relative isolate">
      <div className="flex flex-col gap-y-4  lg:flex-row lg:items-center lg:justify-center">
        <div className="rounded-3xl rounded-t-3xl  bg-white/95 p-8 ring-1 ring-gray-900/10 sm:mx-8 lg:rounded-b-none lg:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
          <h3
            id="tier-hobby"
            className="text-base/7 font-semibold text-indigo-600"
          >
            Básico{" "}
            <span
              className={`${!hasPremium ? "inline bg-green-700 px-2 py-1 ml-4 rounded-xl text-white" : "hidden"}`}
            >
              Ativado
            </span>
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-gray-900">
              R$ 0
            </span>
            <span className="text-base text-gray-500">/mês</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-600">
            Continue testando nossa aplicação gratuitamente
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Apenas 10 transações por mês{" "}
              <span>{`(${numberTransaction ?? 0}/10)`}</span>
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-6 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L10 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 9 4.293 4.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Relatórios IA Ilimitados
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-6 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L10 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 9 4.293 4.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Outras funcionalidades{" "}
            </li>
          </ul>
        </div>
        <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 sm:mx-8 lg:mx-0">
          <h3
            id="tier-enterprise"
            className="text-base/7 font-semibold text-indigo-400"
          >
            Professional
            <span
              className={`${hasPremium ? "inline bg-green-700 px-2 py-1 ml-4 rounded-xl text-white" : "hidden"}`}
            >
              Ativado
            </span>
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-white">
              R$ 19
            </span>
            <span className="text-base text-gray-400">/mês</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            Aproveite todas funcionalidades do plano Professional
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10"
          >
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Transações Ilimitadas
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Relatórios IA Ilimitados
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Outras Funcionalidades{" "}
            </li>
          </ul>

          {!hasPremium ? (
            <Button
              variant="ghost"
              onClick={handleAcquirePlanClick}
              aria-describedby="tier-enterprise"
              className="w-full mt-8 block rounded-md bg-indigo-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
            >
              Adquirir plano{" "}
            </Button>
          ) : (
            <Link
              href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
            >
              <Button
                variant="ghost"
                className="w-full mt-8 block rounded-md bg-indigo-800  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
              >
                Gerenciar Plano
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
