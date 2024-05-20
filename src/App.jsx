export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  // TODO: 학생이름을 클릭하면 나이와 점수를 alert로 보여줌
  const handleStudentClick = (student) => {
    alert(`${student.age}세, ${student.grade}등급`);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((student) => {
          return (
            <li key={student.name}>
              <button onClick={() => handleStudentClick(student)}>
                {student.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
