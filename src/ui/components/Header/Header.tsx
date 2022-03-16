import { Link } from 'react-router-dom'

import { AiFillHome, AiFillStar } from 'react-icons/ai'
import {
  RiMoonClearFill,
  RiMovie2Fill,
  RiSunFill,
  RiTvFill,
} from 'react-icons/ri'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'

import { logo, logoDark } from 'assets'

import { useTheme } from 'context/ThemeContext'

import * as S from './Header.styled'

export function Header() {
  const { toggleTheme, theme } = useTheme()

  return (
    <S.Header>
      <nav>
        <S.List>
          {theme === 'light' ? (
            <img
              src={logoDark}
              alt='logo escrito Disney+ em azul escuro com uma linha em cima que contém um gradiente que vai do azul claro até o escuro'
            />
          ) : (
            <img
              src={logo}
              alt='logo escrito Disney+ em branco com uma linha em cima que contém um gradiente que vai do azul escuro até o claro'
            />
          )}

          <AiFillHome size={20} />
          <li>
            <Link to='/'>INÍCIO</Link>
          </li>
          <BiSearchAlt2 size={20} />
          <li>
            <Link to='/'>PESQUISA</Link>
          </li>
          <FiPlus size={20} />
          <li>
            <Link to='/'>MINHA LISTA</Link>
          </li>
          <AiFillStar size={20} />
          <li>
            <Link to='/'>ORIGINAIS</Link>
          </li>
          <RiMovie2Fill size={20} />
          <li>
            <Link to='/'>FILMES</Link>
          </li>
          <RiTvFill size={20} />
          <li>
            <Link to='/'>SÉRIES</Link>
          </li>
          <button type='button' onClick={toggleTheme}>
            {theme === 'light' ? (
              <RiMoonClearFill size={20} />
            ) : (
              <RiSunFill size={20} />
            )}
          </button>
        </S.List>
      </nav>
    </S.Header>
  )
}
