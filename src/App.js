import React from 'react';
import StudentForm from './component/StudentForm';
import StudentList from './component/StudentList';
import StudentEditPage from './component/StudentEditPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter  basename="/react">
      <Routes>
      
        <Route path="/" element={<StudentForm />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path='/studentedit/:id' element={<StudentEditPage />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
