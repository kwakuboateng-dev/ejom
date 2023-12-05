import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeCent, Bike, CheckCircle, Gem, Headphones, Package, } from "lucide-react";

import Link from "next/link";

const features = [
  {
    name: "Safe Product Delivery",
    Icon: Bike,
    description: "Enjoy secure and timely delivery of your products."
  },
  {
    name: "Quality Assurance",
    Icon: CheckCircle,
    description: "Our team verifies each product to guarantee exceptional quality."
  },
  {
    name: "24/7 Customer Support",
    Icon: Headphones,
    description: "Get assistance anytime with our round-the-clock customer support."
  },

]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for{' '}
            <span className='text-red-600'>
              everything
            </span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Ejom. At Ejom, we&rsquo;re more than just a marketplace &ndash; we&rsquo;re your go-to destination for discovering amazing products, connecting with sellers, and building a community of like-minded individuals.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
            <Button variant={'ghost'}>Find more &rarr;</Button>
          </div>
        </div>
        { /* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray bg-gray-50 ">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<feature.Icon className="w-1/3  h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{feature.name}</h3>
                  <p className="text-muted-foreground text-sm mt-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section >
    </>
  )
}
