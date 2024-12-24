export default function Errors({ errors }) {
  if (errors.length) {
    return (
      <div className="mb-2">
        <span className="text-danger">Please fix the below errors:</span>
        <ul>
        {
          errors.map(error => (
            <li className="text-danger">{ error }</li>
          ))
        }
        </ul>
      </div>
    );
  }

  return (
    <>
    </>
  );
}