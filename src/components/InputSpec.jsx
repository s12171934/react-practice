export default function InputSpec({ label, onChangeNumber }) {
  function handleChange(event) {
    onChangeNumber(label, event.target.value);
  }

  return (
    <div>
      <label>{ label }</label>
      <input type="number" onChange={handleChange} />
    </div>
  );
}
