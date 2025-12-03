export default function Blogs() {
  const blogs = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      desc: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration...",
      link: "#",
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      desc: "Craftsman Automation excels in making precise parts for cars and machines. Despite temporary challenges, it looks resilient with a focus on growth and innovation...",
      link: "#",
    },
    {
      date: "Apr 03, 2024",
      title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
      desc: "FY24 brought us strong gains across portfolios. Here is a simple breakdown of our strategy, review, and performance outlook...",
      link: "#",
    },
    {
      date: "Mar 27, 2024",
      title: "A Small CAD for India, Yet Again",
      desc: "India’s Current Account Deficit remains low, supported by strong services exports. Here’s a quick analysis of the latest numbers...",
      link: "#",
    },
  ];

  return (
    <div className="px-10 py-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-10">Latest Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {blogs.map((b, i) => (
          <div key={i} className="flex flex-col">
            <p className="text-sm text-gray-500 mb-1">{b.date}</p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {b.title}
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-3">
              {b.desc}
            </p>

            <a
              href={b.link}
              className="text-green-600 font-medium hover:underline"
            >
              Read full post
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
