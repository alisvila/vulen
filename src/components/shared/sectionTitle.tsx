export default function SectionTitle({ title }: { title: string }) {
  return (
    <div
      className='text-sm text-Primary font-IranSansMedium px-2 border-r-2 border-Primary mb-4
        flex flex-row items-center'
    >
      {title}
    </div>
  );
}
