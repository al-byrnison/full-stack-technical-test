import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Task {
  @Prop({ unique: true, required: true, trim: true })
  title: string;

  @Prop({ default: 'Sin descripción', trim: true })
  description: string;

  @Prop({ default: false })
  status: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
