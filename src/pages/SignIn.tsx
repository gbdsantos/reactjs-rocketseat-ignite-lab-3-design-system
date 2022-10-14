import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

import { Envelope, Lock } from 'phosphor-react';
import { Logo } from '../Logo';

import './styles/global.css';

export function SignIn() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo className="animate-spin" />

        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>

        <Text
          className="text-gray-400 mt-1"
          size="lg"
        >
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label className="flex flex-col gap-3" htmlFor="email">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label className="flex flex-col gap-3" htmlFor="password">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <label className="flex items-center gap-2" htmlFor="remember">
          <Checkbox id="remember" />
          <Text className="text-gray-200" size="sm">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button
          className="mt-4"
          type="submit"
        >
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}