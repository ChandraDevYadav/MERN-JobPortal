import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FindJob from './pages/FindJob';
import PostJob from './pages/PostJob';
import JobGrid from './pages/JobGrid';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import Candidates from './pages/Candidates';
import CandidatesDetail from './pages/CandidatesDetail';
import Blogs from './pages/Blogs';
import BlogsDetail from './pages/BlogsDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/jobfind" element={<FindJob />} />
      <Route path="/jobpost" element={<PostJob />} />
      <Route path="/jobgrid" element={<JobGrid />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/jobdetail" element={<JobDetail />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/candidatesdetail" element={<CandidatesDetail />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blogdetail" element={<BlogsDetail />} />
    </Routes>
  );
};

export default App;
