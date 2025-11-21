export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      journal_submissions: {
        Row: {
          created_at: string
          id: string
          journal_name: string
          manuscript_title: string
          project_id: string
          reviewer_comments: string | null
          revision_notes: string | null
          status: Database["public"]["Enums"]["journal_status"]
          submission_date: string | null
          submission_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          journal_name: string
          manuscript_title: string
          project_id: string
          reviewer_comments?: string | null
          revision_notes?: string | null
          status?: Database["public"]["Enums"]["journal_status"]
          submission_date?: string | null
          submission_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          journal_name?: string
          manuscript_title?: string
          project_id?: string
          reviewer_comments?: string | null
          revision_notes?: string | null
          status?: Database["public"]["Enums"]["journal_status"]
          submission_date?: string | null
          submission_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "journal_submissions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          attachments: string[]
          content: string
          created_at: string
          id: string
          is_read: boolean
          project_id: string
          sender_id: string
        }
        Insert: {
          attachments?: string[]
          content: string
          created_at?: string
          id?: string
          is_read?: boolean
          project_id: string
          sender_id: string
        }
        Update: {
          attachments?: string[]
          content?: string
          created_at?: string
          id?: string
          is_read?: boolean
          project_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      milestones: {
        Row: {
          completed_at: string | null
          created_at: string
          deliverables: string[]
          description: string | null
          due_date: string | null
          id: string
          project_id: string
          status: Database["public"]["Enums"]["milestone_status"]
          title: string
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          deliverables?: string[]
          description?: string | null
          due_date?: string | null
          id?: string
          project_id: string
          status?: Database["public"]["Enums"]["milestone_status"]
          title: string
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          deliverables?: string[]
          description?: string | null
          due_date?: string | null
          id?: string
          project_id?: string
          status?: Database["public"]["Enums"]["milestone_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "milestones_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          deadline: string | null
          id: string
          order_number: string
          package_id: string
          payment_intent_id: string | null
          requirements: string | null
          status: Database["public"]["Enums"]["order_status"]
          stripe_session_id: string | null
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deadline?: string | null
          id?: string
          order_number: string
          package_id: string
          payment_intent_id?: string | null
          requirements?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          stripe_session_id?: string | null
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          deadline?: string | null
          id?: string
          order_number?: string
          package_id?: string
          payment_intent_id?: string | null
          requirements?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          stripe_session_id?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
        ]
      }
      packages: {
        Row: {
          category: Database["public"]["Enums"]["package_category"]
          created_at: string
          description: string
          features: string[]
          id: string
          is_active: boolean
          is_popular: boolean
          name: string
          price_max: number
          price_min: number
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["package_category"]
          created_at?: string
          description: string
          features?: string[]
          id?: string
          is_active?: boolean
          is_popular?: boolean
          name: string
          price_max: number
          price_min: number
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["package_category"]
          created_at?: string
          description?: string
          features?: string[]
          id?: string
          is_active?: boolean
          is_popular?: boolean
          name?: string
          price_max?: number
          price_min?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          institution: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          institution?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          institution?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      project_files: {
        Row: {
          created_at: string
          description: string | null
          file_path: string
          file_size: number
          filename: string
          id: string
          milestone_id: string | null
          mime_type: string
          project_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_path: string
          file_size: number
          filename: string
          id?: string
          milestone_id?: string | null
          mime_type: string
          project_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string
          description?: string | null
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          milestone_id?: string | null
          mime_type?: string
          project_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_files_milestone_id_fkey"
            columns: ["milestone_id"]
            isOneToOne: false
            referencedRelation: "milestones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_files_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          assigned_to: string[]
          completed_at: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          order_id: string
          progress: number
          start_date: string | null
          status: Database["public"]["Enums"]["project_status"]
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string[]
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          order_id: string
          progress?: number
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string[]
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          order_id?: string
          progress?: number
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      journal_status:
        | "submitted"
        | "under_review"
        | "revisions_needed"
        | "accepted"
        | "rejected"
      milestone_status: "pending" | "in_progress" | "completed" | "overdue"
      order_status:
        | "pending"
        | "paid"
        | "in_progress"
        | "completed"
        | "cancelled"
        | "refunded"
      package_category: "research" | "implementation" | "submission" | "extras"
      project_status:
        | "not_started"
        | "in_progress"
        | "review"
        | "completed"
        | "on_hold"
      user_role: "client" | "consultant" | "admin" | "developer" | "researcher"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      journal_status: [
        "submitted",
        "under_review",
        "revisions_needed",
        "accepted",
        "rejected",
      ],
      milestone_status: ["pending", "in_progress", "completed", "overdue"],
      order_status: [
        "pending",
        "paid",
        "in_progress",
        "completed",
        "cancelled",
        "refunded",
      ],
      package_category: ["research", "implementation", "submission", "extras"],
      project_status: [
        "not_started",
        "in_progress",
        "review",
        "completed",
        "on_hold",
      ],
      user_role: ["client", "consultant", "admin", "developer", "researcher"],
    },
  },
} as const
