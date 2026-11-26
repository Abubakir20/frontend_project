export default function SummaryRow({label, value}) {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-[16px] text-[#F7F9FA]">{label}</p>
      <p className="text-[16px] text-[#F7F9FA]">{value}</p>
    </div>
  );
}
