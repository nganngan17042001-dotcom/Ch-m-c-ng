import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MonthPicker } from "@/components/AppShell";
import { TimesheetTable } from "@/components/TimesheetTable";
import { exportTimesheet } from "@/lib/excel";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bảng chấm công — Quản lý Chấm công" },
    { name: "description", content: "Bảng thống kê chấm công tự động tính công, xuất Excel." },
    { property: "og:title", content: "Bảng chấm công" },
    { property: "og:description", content: "Bảng thống kê chấm công tự động tính công, xuất Excel." },
  ] }),
  component: Index,
});

function Index() {
  const s = useStore();
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="mr-auto text-2xl font-semibold">Bảng chấm công</h1>
        <MonthPicker />
        <Button onClick={() => exportTimesheet(s)}><Download className="mr-1 h-4 w-4" />Xuất Excel</Button>
      </div>
      <p className="text-sm text-muted-foreground">Bấm vào số ngày trên tiêu đề để đánh dấu ngày lễ. Dữ liệu lấy từ Lịch trực, không sửa trực tiếp.</p>
      <TimesheetTable />
    </div>
  );
}
