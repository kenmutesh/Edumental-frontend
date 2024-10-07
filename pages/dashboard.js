import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Edumental</title>  
      </Head>
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-semibold mb-6 text-black">EduMental</h2>
        <nav className="space-y-4">
          <Link href="#" className="block text-black hover:text-black">Dashboard</Link>
          <Link href="#" className="block text-black hover:text-black">Modules</Link>
          <Link href="#" className="block text-black hover:text-black">Inbox</Link>
          <Link href="#" className="block text-black hover:text-black">Notifications</Link>
          <Link href="#" className="block text-black hover:text-black">Challenges</Link>
          <Link href="#" className="block text-black hover:text-black">Calendar</Link>
          <Link href="#" className="block text-black hover:text-black">Submissions</Link>
          <Link href="#" className="block text-black hover:text-black">My Account</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-black">Welcome back, Hanah</h2>
            <p className="text-black">Great to have you back</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-md"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Sign out
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Enrolled */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Enrolled</h3>
            <p className="text-4xl font-bold text-black">3</p>
          </div>

          {/* Completed */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Completed</h3>
            <p className="text-4xl font-bold text-black">2</p>
          </div>

          {/* Points Earned */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Points Earned</h3>
            <p className="text-4xl font-bold text-black">50</p>
          </div>

          {/* Daily Progress */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Daily Progress</h3>
            <ul className="space-y-2 text-black">
              <li>Coping Strategies</li>
              <li>Mindfulness Techniques</li>
              <li>Emotion Regulation</li>
            </ul>
          </div>

          {/* Recent Enrolled Modules */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Recent Enrolled Modules</h3>
            <div className="flex justify-between text-black">
              <p>Understanding Anxiety</p>
              <span>4/10 Lesson</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-black h-2 rounded-full w-1/4"></div>
            </div>
          </div>

          {/* Coping Strategies */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Coping Strategies</h3>
            <div className="flex justify-between text-black">
              <p>Coping Strategies</p>
              <span>4/20 Lesson</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-black h-2 rounded-full w-1/5"></div>
            </div>
          </div>
        </div>

        {/* Module Summary */}
        <h2 className="text-2xl font-semibold mt-8 mb-6 text-black">Module Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-black">Emotional Intelligence</h4>
              <p className="text-black">2:30hr - 14 Lessons</p>
            </div>
            <button className="text-black">Practice Assignment</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-black">Developing Emotional Maturity</h4>
              <p className="text-black">2:30hr - 14 Lessons</p>
            </div>
            <button className="text-black">Practice Assessment</button>
          </div>
        </div>

        {/* Upcoming Session */}
        <h2 className="text-2xl font-semibold mt-8 mb-6 text-black">Upcoming Session</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-black">Understanding Your Purpose</h4>
              <p className="text-black">5:30pm</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-black">Redefining Yourself</h4>
              <p className="text-black">2:30pm</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
