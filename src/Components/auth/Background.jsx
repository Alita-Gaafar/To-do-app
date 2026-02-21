export default function Background() {
  return (
    <div className="absolute top-0 left-0 -z-10 inset-0 bg-amber-50">
      <img
        className="w-full h-full"
        src="https://images.unsplash.com/photo-1758598306535-93877d73892d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RpdmF0aW9uJTIwcHJvZHVjdGl2aXR5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjY5MzkwOHww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="NotFound"
      />
      <div className="overlay bg-[#0b4f4aa3] backdrop-blur-[1px] inset-0 absolute z-1 top-0"></div>
    </div>
  );
}
