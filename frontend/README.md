# OrvixAI Frontend

Дашборд с AI-планированием задач и анализом поведения пользователя.

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5** (strict)
- **Tailwind CSS 4** + CSS-переменные для тем
- **Space Grotesk** (шрифт через next/font)
- `clsx` + `tailwind-merge` — утилита `cn()` для классов

## Запуск

```bash
cd frontend
npm install
npm run dev
```

Откроется на `http://localhost:3000`. Hot reload из коробки.

| Команда         | Что делает        |
| --------------- | ----------------- |
| `npm run dev`   | Dev-сервер        |
| `npm run build` | Продакшн-сборка   |
| `npm run start` | Запуск собранного |
| `npm run lint`  | ESLint            |

## Структура

```
src/
├── app/
│   ├── layout.tsx          — корневой layout (шрифт, тема, meta)
│   ├── page.tsx            — главная страница (дашборд)
│   └── globals.css         — токены тем + базовые стили
│
├── components/
│   ├── ai/                 — AI-блоки
│   │   ├── BehaviorAnalysis.tsx  — паттерны поведения
│   │   └── Recommendation.tsx    — рекомендации AI
│   │
│   ├── dashboard/          — колонки дашборда
│   │   ├── TaskColumn.tsx        — левая: список задач + ввод
│   │   ├── StatsColumn.tsx       — центр: статистика
│   │   └── AiColumn.tsx          — правая: AI-инсайты
│   │
│   ├── stats/              — компоненты статистики
│   │   ├── ProgressBar.tsx
│   │   └── StatCard.tsx
│   │
│   ├── tasks/              — управление задачами
│   │   ├── TaskInput.tsx         — форма новой задачи
│   │   ├── TaskItem.tsx          — строка задачи
│   │   └── TaskList.tsx          — список задач
│   │
│   └── ui/                 — переиспользуемые UI-элементы
│       ├── PriorityBadge.tsx     — бейдж приоритета
│       ├── StatusBadge.tsx       — бейдж статуса
│       └── ThemeToggle.tsx       — переключатель темы
│
└── lib/
    ├── types.ts            — типы (Task, DayStats, и т.д.)
    ├── utils.ts            — cn(), formatDate(), generateId()
    └── theme-provider.tsx  — контекст темы (data-theme)
```

## Типы данных

Все типы в `src/lib/types.ts`.

```typescript
type TaskStatus = "todo" | "in_progress" | "done";
type TaskPriority = "low" | "medium" | "high";

interface Task {
  task_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: string | null;
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
}
```

`DayStats`, `BehaviorPattern`, `AiRecommendation` — пока только на фронте, бэкенд ещё не отдаёт.

## Темы

Две темы: **dark** (по умолчанию) и **light**. Переключается через `data-theme` на `<html>`.

Токены в `globals.css`:

```
--bg-primary / --bg-secondary / --bg-card / --bg-input / --bg-hover
--text-primary / --text-secondary / --text-muted
--border / --border-hover
--accent-purple / --accent-cyan / --accent-green / --accent-yellow / --accent-red / --accent-orange
```

В Tailwind используются как `bg-bg-card`, `text-text-primary`, `border-border`.

## Текущее состояние

Фронт сейчас работает полностью на локальном стейте (`useState`). Задачи создаются и переключаются в памяти, никаких API-запросов нет. Можно запустить и потыкать без бэкенда.

Когда будем подключать API — нужен будет `src/lib/api.ts` и `.env.local` с `NEXT_PUBLIC_API_URL`.

## Роутинг

Next.js App Router — файловая маршрутизация. Новая страница = новая папка в `src/app/`:

```
src/app/settings/page.tsx  →  /settings
src/app/tasks/[id]/page.tsx  →  /tasks/123
```

## Импорты

Алиас `@/` указывает на `src/`. Все импорты через него:

```typescript
import { cn } from "@/lib/utils";
import { TaskItem } from "@/components/tasks/TaskItem";
```
