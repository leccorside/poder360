"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="p-2 bg-blue-500 text-white rounded">
      Voltar
    </button>
  );
}
