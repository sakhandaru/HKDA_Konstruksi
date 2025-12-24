"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5 lg:grid lg:grid-cols-2">
          <div className="bg-[#0f1115] p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take the first step today, and let's build a stay so on!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              If you have any questions or would like to discuss a project, feel
              free to reach out to our team.
            </p>
            {/* Contact Details could go here */}
          </div>
          <div className="p-10 lg:p-16">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name *
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name *
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email *
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
