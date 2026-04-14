import Link from "next/link";
import Image from "next/image";



export default function ProductsList({ products }) {

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[90%] mx-auto pt-4">        {products.map((e) => (
      <Link
        key={e.id}
        href={`/products/${e.id}`}
        className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl"
      >
        <Image
          className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
          src={e.image}
          alt="blog image"
          width={300}
          height={200}
        />

        <div className="flex flex-col justify-between md:p-4 leading-normal">
          <h5 className="mb-2 text-[18px] font-bold tracking-tight text-heading">
            {e.title}
          </h5>

          <p className="mb-6 text-body">
            {/* {e.description} */}
            {e.description.split(" ").slice(0, 8).join(" ")}
          </p>

          <div>
            <button
              type="button"
              className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              {e.price}$
              <svg
                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    ))}
    </main>
  )
}