import { Icons } from "@/components/icons";

export default function AboutPage() {
  return (
    <>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is a real-estate app with features like auth, rate limiting, image upload while
            having separate backend using Express that Nextjs uses to interact to serve data to the client.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.house className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Sell or rent house</h3>
                <p className="text-sm text-muted-foreground">
                  You can view different types of house that are available to buy or rent. You can also browse
                  the house depending upon various filters such as price, location, close landmark and many
                  more filters. You could also add house for sale for others to view and all for free.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.land className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Sell or rent land</h3>
                <p className="text-sm text-muted-foreground">
                  You can view land that are available to buy or rent. You can also browse land using various
                  filters such as the length, breadth, area, location and many more filters. You could also
                  add land for sale for others to view and is also free.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 py-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is a real-estate app with features like auth, rate limiting, image upload while
            having separate backend using Express that Nextjs uses to interact to serve data to the client.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current"
              >
                <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Express</h3>
                <p className="text-sm text-muted-foreground">
                  Routing, error handling, user input validation and middleware using Express.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="h-12 w-12 fill-current"
              >
                <path d="M 35.199219 2.101563 C 33.699219 2.101563 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601563 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101563 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601563 40.5 22.300781 C 40.601563 23.601563 40.601563 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601563 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101563 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101563 Z M 13.535156 2.542969 C 12.382813 2.519531 10.976563 2.648438 9.398438 3.398438 C 8.898438 3.601563 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601563 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601563 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101563 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101563 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101563 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101563 16.300781 2.699219 14.597656 2.601563 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601563 25.097656 16.300781 C 26.597656 20.5 25.101563 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601563 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101563 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101563 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601563 26.5 45.199219 27.5 46 C 28.199219 46.601563 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601563 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101563 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601563 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101563 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601563 C 33.5 6.101563 32 4.898438 29.800781 4.101563 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101563 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101563 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601563 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601563 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445313 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101563 17.902344 16.800781 17.402344 17.199219 C 17.101563 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601563 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601563 25.300781 22.699219 25.101563 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101563 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101563 36.300781 17.300781 36 17.402344 C 35.601563 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101563 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101563 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101563 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101563 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601563 38.199219 32.800781 C 38.199219 33 38.199219 33.101563 38.097656 33.300781 C 38.898438 33.5 39.601563 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101563 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601563 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601563 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601563 32.5 21.402344 32.699219 C 20.601563 33.199219 19.597656 33.601563 18.597656 33.800781 C 17.699219 34.101563 17.199219 34.101563 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101563 22.097656 32 Z"></path>
              </svg>

              <div className="space-y-2">
                <h3 className="font-bold">PostgreSQL</h3>
                <p className="text-sm text-muted-foreground">
                  PostgreSQL is used as database to store information.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current"
              >
                <path d="M31.99 19.12c-0.010 0.307-0.417 0.646-1.245 1.078-1.708 0.891-10.552 4.531-12.438 5.51-1.885 0.984-2.927 0.974-4.417 0.26-1.49-0.708-10.901-4.516-12.599-5.323-0.844-0.406-1.276-0.745-1.292-1.068v3.234c0 0.323 0.448 0.661 1.292 1.068 1.698 0.813 11.115 4.615 12.599 5.323 1.49 0.714 2.531 0.724 4.417-0.26 1.885-0.979 10.729-4.62 12.438-5.51 0.87-0.448 1.255-0.802 1.255-1.12 0-0.302 0-3.188 0-3.188 0-0.005-0.005-0.005-0.010-0.005zM31.99 13.849c-0.016 0.302-0.417 0.641-1.245 1.078-1.708 0.885-10.552 4.526-12.438 5.505-1.885 0.984-2.927 0.974-4.417 0.266-1.49-0.714-10.901-4.516-12.599-5.328-0.844-0.401-1.276-0.745-1.292-1.068v3.234c0 0.323 0.448 0.667 1.292 1.068 1.698 0.813 11.109 4.615 12.599 5.328 1.49 0.708 2.531 0.719 4.417-0.26 1.885-0.984 10.729-4.62 12.438-5.51 0.87-0.453 1.255-0.807 1.255-1.125 0-0.302 0-3.188 0-3.188s-0.005 0-0.010 0zM31.99 8.375c0.016-0.323-0.406-0.609-1.266-0.922-1.661-0.609-10.458-4.109-12.141-4.729-1.682-0.615-2.37-0.589-4.349 0.12-1.979 0.714-11.339 4.385-13.005 5.036-0.833 0.328-1.24 0.63-1.224 0.953v3.234c0 0.323 0.443 0.661 1.292 1.068 1.693 0.813 11.109 4.615 12.599 5.328 1.484 0.708 2.531 0.719 4.417-0.266 1.88-0.979 10.729-4.62 12.438-5.505 0.865-0.453 1.25-0.807 1.25-1.125 0-0.302 0-3.193 0-3.193zM11.458 11.438l7.417-1.135-2.24 3.281zM27.859 8.479l-4.859 1.922-4.385-1.734 4.854-1.917zM14.984 5.302l-0.719-1.323 2.24 0.875 2.109-0.688-0.573 1.365 2.151 0.807-2.771 0.286-0.625 1.495-1-1.667-3.203-0.286zM9.458 7.172c2.193 0 3.964 0.688 3.964 1.531 0 0.849-1.776 1.536-3.964 1.536s-3.964-0.688-3.964-1.536c0-0.844 1.776-1.531 3.964-1.531z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Redis</h3>
                <p className="text-sm text-muted-foreground">
                  Key Value database where we store the user's session.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.nextjs className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 14</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React 18</h3>
                <p className="text-sm">Server and Client Components. Use hook.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">
                  UI components built using Radix UI and styled with Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication using NextAuth.js and middlewares.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.typescript className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Typescript</h3>
                <p className="text-sm text-muted-foreground">Typescript used in both frotend and backend.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.sun className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">Theme</h3>
                <p className="text-sm text-muted-foreground">
                  Integrates light and dark mode in UI for better visibilty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            There are many more features in this web app. Please view the github repository to see it in
            detail.
          </p>
        </div>
      </section>
    </>
  );
}
