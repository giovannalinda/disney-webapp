import { Link } from 'react-router-dom'

import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { RiMovie2Fill, RiTvFill } from 'react-icons/ri'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'

import { logo } from 'assets'

import { useTheme } from 'context/ThemeContext'

import * as S from './Header.styled'

export function Header() {
  const { toggleTheme, theme } = useTheme()

  return (
    <S.Header>
      <nav>
        <S.List>
          <img src={logo} alt='logo disney' />
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
          <button
            type='button'
            onClick={toggleTheme}
            style={{
              color: theme === 'dark' ? '#fff' : '#000',
              background: theme === 'dark' ? '#000' : '#fff',
            }}
          >
            ☀️
          </button>
        </S.List>
      </nav>
    </S.Header>
  )
}
