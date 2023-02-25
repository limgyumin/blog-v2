---
title: Compound Component 패턴으로 유연한 컴포넌트 설계하기
description: 자주 변경되는 요구사항에 유연하게 대응할 수 있는 컴포넌트는 어떻게 만들어야 하는 걸까요? 이번 글에서는 Compound Component 패턴, 직역하자면 합성 컴포넌트 패턴에 대해 알아보려 합니다.
createdAt: 2023-02-25
category: React
---

## 합성 컴포넌트 패턴?

합성 컴포넌트 패턴이란 하나의 기능 단위 컴포넌트를 역할 단위로 나누고, 구조화하여 컴포넌트의 사용처에서 합성하여 사용할 수 있도록 하는 방법으로, 내부의 역할이 분리되어 유지보수가 쉽고, 컴포넌트 레이아웃의 결정권이 컴포넌트 자체가 아닌 작업자에게 위임되기 때문에 변경에 유연한 컴포넌트를 설계할 수 있습니다.

제가 생각하는 합성 컴포넌트 패턴의 이론적 설명은 위와 같습니다.

합성 컴포넌트 패턴... 뭔가 길어서 쓰는데 귀찮습니다. 그냥 줄여서 `CCP(Compound Component Pattern)`라 합시다.

CCP 사용의 첫 단계는 컴포넌트 내부의 각 역할을 파악하고, 분리하는 것입니다.

이 개념을 이해하기 앞서 컴포넌트는 어떻게 분리되어야 하는가에 대해 먼저 알아 보면 좋을 것 같습니다.

이후의 내용에서 CCP의 사용법에 대해 자세하게 알아봅시다.

## 컴포넌트는 어떻게 분리되어야 할까?

React는 기본적으로 컴포넌트 단위로 분리된 레이아웃 조각들을 조합하는 컴포지션을 기반으로 레이아웃을 구성합니다.

컴포넌트를 작은 단위로 분리하고, 분리된 컴포넌트는 개별적으로 관리할 수 있으며, 한 컴포넌트에 종속되지 않기 때문에 다른 컴포넌트에서 분리된 컴포넌트를 재사용할 수도 있어 결론적으로 유지보수에 유리합니다.

그럼 컴포넌트는 어떤 기준과 단위로 분리할 수 있는 걸까요?

일반적으로 컴포넌트 분리의 기준은 기능 단위와 역할 단위가 있다고 생각합니다. 반박 시 님 말이 맞음.

기능이란 역할의 집합 개념입니다. 예시를 하나 들어보죠.

Button과 Input 컴포넌트가 있습니다. 이는 역할 단위일까요 기능 단위일까요?
이를 구분짓는 기준은 어떻게 사용하냐에 따라 달라집니다. 

기본적으로 Button과 Input은 기능 단위 컴포넌트일 것입니다.
Button은 사용자의 클릭을 통해 특정 액션을 실행하는 `기능`을 가졌고,
Input은 사용자의 입력을 통해 특정 액션을 실행하는 `기능`을 가졌으니까요.

다음으로 Button 컴포넌트와 Input 컴포넌트를 조합해서 Form 컴포넌트를 만들었습니다. Form 컴포넌트는 기능 단위일 것이고, Button과 Input은 기능 단위 컴포넌트일까요?

이때, 저는 Button과 Input은 기능과 역할을 모두 담당하는 컴포넌트라고 생각합니다.

Button과 Input 컴포넌트는 Form 컴포넌트의 내부 컴포넌트로써 Form 컴포넌트의 기능을 수행하기 위한 `역할`을 담당할 것이고, 이를 독립적으로 보자면 `기능`을 담당하는 것이죠.

컴포넌트 분리에는 `기능` 단위로의 분리를 통한 재사용성의 목적도, `역할` 단위로의 분리를 통해 레이아웃을 부분화 시켜서 복잡도를 낮추기 위함의 목적 두 가지의 기준으로 분리가 가능하다고 생각합니다. 반박 시 님 말이 맞음.

제가 이렇게 기능과 역할 단위에 대해 말씀드린 이유는 CCP는 하나의 기능 단위 컴포넌트를 역할 단위에 조금 더 초점을 맞춰 분리한다는 것을 말씀드리고 싶어서입니다.

이후에도 기능과 역할 개념을 기반으로 설명이 계속될 것이라 미리 짚고 넘어갑시다.

아 물론 역할 단위로만 분리된 컴포넌트는 재사용의 목적으로 사용하기는 어렵습니다. 따라서 다른 컴포넌트에서 재사용할 수 있도록 기능 단위로 분리해 볼 수도 있을 것입니다.

## 합성 컴포넌트 패턴, 왜 사용해야 할까?

CCP를 사용하기 전과 후의 차이를 보면 왜 사용해야 하는지에 대해 이해하기가 훨씬 수월할 것 같습니다.

Tabs 컴포넌트를 예시로 구현해 보겠습니다. Tabs 컴포넌트는 클릭을 통해 탭 목록의 탭을 선택하고, 탭에 대응하는 컴포넌트를 렌더합니다.

### 합성 컴포넌트 패턴 없이 컴포넌트 구현하기

일반적으로 CCP 없이도 구현이 가능합니다.

```tsx
export type TabItem = {
  sequence: number;
  label: string;
  renderContent: JSX.Element;
};

type Props = {
  tabList: TabItem[];
  defaultSequence: number;
};

const Tabs = ({ tabList, defaultSequence }: Props) => {
  const [currentSequence, setCurrentSequence] = useState(defaultSequence);

  const handleItemClick = (sequence: number) => () => setCurrentSequence(sequence);

  const renderContent = useMemo(
    () => tabList.find((item) => item.sequence === currentSequence)?.renderContent,
    [tabList, currentSequence],
  );

  return (
    <div>
      <div>
        {tabList.map((item) => (
          <button key={item.sequence} onClick={handleItemClick(item.sequence)}>
            {item.label}
          </button>
        ))}
      </div>

      {renderContent ? <div>{renderContent}</div> : null}
    </div>
  );
};
```

위와 같이 구현했고, 사용처에서는 다음과 같이 사용할 수 있을 것입니다.

```tsx
const TAB_LIST: TabItem[] = [
  {
    sequence: 0,
    label: 'Menu 1',
    renderContent: <div>Content 1</div>,
  },
  {
    sequence: 1,
    label: 'Menu 2',
    renderContent: <div>Content 2</div>,
  },
];

const Page = () => {
  return <Tabs defaultValue={0} tabList={tabList} />;
}
```

대충 구현했습니다. 걷으로 보기에는 큰 문제점이 보이진 않습니다.

오히려 컴팩트하고, 원하는 데이터를 리스트 형태로 넣어주면 알아서 척척 만들어지니 편합니다.

그러나 이러한 구현에는 몇 가지 문제점이 있습니다.

#### 1. 레이아웃의 결정권이 사용하는 컴포넌트에 한정되어 있어 유연한 변경이 어렵다.

만약 요구사항이 변경되어 특정 사용처에서만 탭 목록을 렌더할 컴포넌트의 하단에 위치하도록 변경해야 한다면 어떨까요?

🤷🏻‍♂️: 그게 뭐요? 그냥 순서 변경을 위한 prop 하나 추가해서 처리하면 되는 거 아닙니까?

물론 그 방법으로 해결은 할 수 있을 겁니다.

하지만 단순 레이아웃 배치에 대한 요구사항 변경에 따라 계속해서 props 인터페이스와 내부 구현에 변경이 일어날 것입니다. 이는 비효율적이고, 유연한 방법이 아닙니다.

#### 2. 모든 내부 컴포넌트의 역할을 한 컴포넌트에서 제어해야 한다.

위의 구현에서는 내부 컴포넌트가 역할 단위로 분리가 전혀 되어있지 않습니다.

물론 탭 목록과 렌더할 컴포넌트 영역을 분리할 수는 있을 것이고, 그렇다면 내부 구현은 이전보다 좋아질 겁니다.

하지만 그렇다고 해서 1번의 문제점이 해결되지는 않습니다. 내부적으로 컴포넌트를 분리하더라도 외부에서는 마찬가지로 요구사항의 변경에 따라 prop을 계속 추가하거나 수정해야 해서, 그에 따른 prop drilling 문제도 심각해질 것입니다.

또한, 내부의 역할이 분리되어도 외부에서는 모든 역할에 대한 옵션을 한 컴포넌트에 제공해야 합니다.

한 컴포넌트에서 모든 역할들을 제어하는 것은 올바른 관심사 분리가 아닙니다.

아무리 제어할 옵션의 네이밍을 야무지게 하더라도, 어떤 컴포넌트를 위한 옵션인지 역할별로 명시적으로 드러내긴 어렵습니다. 사실상 사용처에서는 내부의 역할이 어떻게 이뤄져 있는지 가시적으로 확인할 수가 없거든요. 따라서 이 옵션이 어떤 역할 컴포넌트에 대한 것인지 확인하기 위해 내부 구현을 들여다 봐야 할 것입니다.

그럼 이 문제들을 어떻게 해결할 수 있을까요? 그 답은 CCP에 있습니다.

### 합성 컴포넌트 패턴으로 컴포넌트 구현하기

CCP에 따라 역할 단위로 분리된 하나의 기능 컴포넌트는 역할들이 사용처에서도 드러나서 이를 재조합할 수 있으므로, 결론적으로 레이아웃의 결정권이 작업자에게 위임될 수 있도록 하여 유연성이 보장됩니다. 또한 각 역할 컴포넌트별로 옵션 제어가 가능해져 내부 구현을 매번 확인할 일도 적어집니다.

위에서도 말씀드렸 듯, CCP 사용의 첫 단계는 컴포넌트 내부의 각 역할을 파악하고, 분리하는 것입니다.

Tabs 컴포넌트의 경우 렌더할 탭 목록, 클릭할 탭 아이템, 렌더할 컴포넌트 이렇게 세 가지 역할로 분리할 수 있습니다.

그리고 이에 필요한 상태와 액션들을 정리합니다. 이는 하나의 상위 컴포넌트에서 정의할 것입니다.

최종적으로 분리된 컴포넌트들을 하나의 기능 컴포넌트 네이밍으로 모듈화합니다.

해당 예제에서는 Tabs가 될 것이고, 사용처에서는 `Tabs.Root`, `Tabs.List`, `Tabs.Item`, `Tabs.Content` 와 같이 사용할 수 있겠죠.

Root는 `기능`이므로 상위 컴포넌트, List, Item, Content는 `역할`이므로 하위 컴포넌트가 됩니다.

한번 차례대로 하나씩 구현해 봅시다. 우선 Root 먼저 구현해 봅시다.

```tsx
type Props = {
  defaultValue: number;
}

type TabRootContextType = {
  selectedValue: number;
  handleItemClick: (value: number) => () => void;
}

export const TabRootContext = createContext<TabRootContextType | null>(null);

export const Root = ({ defaultValue, children }: PropsWithChildren<Props>) => {
  const [selectedValue, setSelectedValue] = useState<number>(defaultValue);

  const handleItemClick = (value: number) => () => setSelectedValue(value);

  const context = {
    selectedValue,
    handleItemClick,
  };

  return <TabRootContext.Provider value={context}>{children}</TabRootContext.Provider>;
};
```

선택한 탭에 대한 상태, 그리고 탭을 클릭했을 때에 대한 액션을 정의했습니다.

그리고 React의 Context API를 사용하여 상태와 액션 함수를 전달하여 자식 컴포넌트에서 접근할 수 있도록 구현했습니다.

이 상태와 액션들은 외부에 드러날 필요가 없습니다. UI를 통해 내부적으로만 제어되면 됩니다. Root에서 필요한 건 "어떤 탭을 기본으로 보여줄 것인가?" 뿐입니다.

```ts
export const useTabRootContext = () => {
  const context = useContext(TabRootContext);

  if (!context) {
    throw new Error('useTabRootContext should be used within Root');
  }

  return context;
};
```

자식에서 Root 컴포넌트의 Context에 접근할 수 있도록 custom hook까지 만들어주시면 Root의 구현은 끝입니다.

이제 역할을 담당하는 자식 컴포넌트를 구현할 차례입니다. Item, List, Content 순서대로 구현해 보겠습니다.

```tsx
type Props = {
  value: number;
}

export const Item = ({ value, children }: PropsWithChildren<Props>) => {
  const { handleItemClick } = useTabRootContext();

  return (
    <button onClick={handleItemClick(value)}>
      {children}
    </button>
  );
};
```

Item 컴포넌트에서 필요한 건 "클릭한 탭의 값으로 선택된 탭에 대한 상태를 변경시킨다." 입니다.

Root 컴포넌트의 Context에 접근해서 클릭 액션 함수를 가져오고, 버튼 요소의 onClick 이벤트에 등록했습니다. 액션 함수의 인자로 prop으로 받은 탭의 값을 전달합니다.

Root에서 액션 함수를 정의할 때 보셨 듯 인자 전달 시 인라인 함수를 사용하지 않기 위해 커링 함수로 구현했습니다.

만약 선택된 탭에 active style을 적용하고자 한다면, 선택된 탭에 대한 상태도 가져오면 됩니다.

```tsx
type Props = unknown;

export const List = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};
```

List는 단순 Item 컴포넌트들을 자식으로 받아서 보여주는 역할입니다. 분리한 이유는 이후에 Item의 정렬 방식 등을 List에서 제어할 수 있도록 제어하기 위함입니다.

```tsx
type Props = {
  value: number;
}

export const Content = ({ value, children }: PropsWithChildren<Props>) => {
  const { selectedValue } = useTabRootContext();

  const shouldRender = value === selectedValue;

  if (!shouldRender) {
    return null;
  }

  return <div>{children}</div>;
};
```

마지막으로 Content입니다. 선택된 탭에 대한 상태와 prop으로 받은 탭에 대한 값이 일치할 경우에만 컴포넌트를 렌더합니다.

자 이제 모든 구현이 끝났으니 모듈화를 시켜줍시다.

```tsx
// tabs/index.ts

export { Root } from './Root';
export { Item } from './Item';
export { List } from './List';
export { Content } from './Content';
```

사용할 때에는 Tabs 모듈을 import 해서, 각각의 분리된 컴포넌트들을 조립해서 사용하면 됩니다.

```tsx
import * as Tabs from "tabs";

export const Page = () => {
  return (
    <Tabs.Root defaultValue={1}>
      <Tabs.List>
        <Tabs.Item value={1}>First Tab</Tabs.Item>
        <Tabs.Item value={2}>Second Tab</Tabs.Item>
      </Tabs.List>
      <Tabs.Content value={1}><First/></Tabs.Content>
      <Tabs.Content value={2}><Second/></Tabs.Content>
    </Tabs.Root>
  )
}
```

오마이갓 정말 아름답습니다.

CCP를 사용하기 전의 예제에서 이런 의문을 한번 가졌었습니다.

> 만약 요구사항이 변경되어 특정 사용처에서만 탭 목록을 렌더할 컴포넌트의 하단에 위치하도록 변경해야 한다면 어떨까요?

레이아웃 배치의 결정권이 작업자에게 위임되었기 때문에, 이 문제해결은 정말 껌입니다. 그냥 탭 목록과 렌더할 컴포넌트의 순서를 바꾸기만 하면 됩니다.

```tsx
export const Page = () => {
  return (
    <Tabs.Root defaultValue={1}>
      <Tabs.Content value={1}><First/></Tabs.Content>
      <Tabs.Content value={2}><Second/></Tabs.Content>
      <Tabs.List>
        <Tabs.Item value={1}>First Tab</Tabs.Item>
        <Tabs.Item value={2}>Second Tab</Tabs.Item>
      </Tabs.List>
    </Tabs.Root>
  )
}
```

또한, 각각의 역할 컴포넌트별 옵션 제어가 가능해졌습니다. 예를 들어 Item의 기본 정렬은 수평 정렬인데, 수직 정렬로 변경하고 싶습니다.

```tsx
export const Page = () => {
  return (
    <Tabs.Root defaultValue={1}>
      <Tabs.Content value={1}><First/></Tabs.Content>
      <Tabs.Content value={2}><Second/></Tabs.Content>
      // List의 역할임이 확실하므로 List 컴포넌트에 prop을 추가합니다.
      <Tabs.List direction="vertical"> 
        <Tabs.Item value={1}>First Tab</Tabs.Item>
        <Tabs.Item value={2}>Second Tab</Tabs.Item>
      </Tabs.List>
    </Tabs.Root>
  )
}
```

역할이 확실히 구분되고 이는 가시적으로 드러나기 때문에 List의 역할임을 알 수 있고, 정렬 방식에 대한 prop 또한 List에 추가되어야 함을 알 수 있습니다.

이렇게 합성 컴포넌트 패턴을 사용하면 레이아웃 변경에 용이하고, 역할 경계가 뚜렷해져 유연한 컴포넌트 설계가 가능해집니다.

코드단의 변경을 최소화 하고 싶고, 다양한 variant를 가진 컴포넌트를 설계해야 하는 사람들에게 "합성 컴포넌트 패턴"을 적극 추천드립니다!