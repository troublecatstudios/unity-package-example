# ExampleEditor

**Namespace:** UnityPackageExampleEditor <br>
**Assembly:** Editor.dll

```csharp
public class ExampleEditor : Editor, IPreviewable, IToolModeOwner
```

**Implements:** _[Editor](../), [IPreviewable](../), [IToolModeOwner](../)_

### 🛠 Constructors
```csharp
public ExampleEditor()
```

### 📦 Properties
#### hideFlags
```csharp
public HideFlags hideFlags { get; public set; }
```

**Returns** <br>
[HideFlags](../) <br>
#### name
```csharp
public string name { get; public set; }
```

**Returns** <br>
[string](https://learn.microsoft.com/en-us/dotnet/api/System.String?view=net-7.0) <br>
#### serializedObject
```csharp
public SerializedObject serializedObject { get; }
```

**Returns** <br>
[SerializedObject](../) <br>
#### target
```csharp
public virtual Object target { get; public set; }
```

**Returns** <br>
[Object](../) <br>
#### targets
```csharp
public Object[] targets { get; }
```

**Returns** <br>
[Object[]](../) <br>
### ⛹️‍♀️ Methods
#### ShouldHideOpenButton()
```csharp
protected virtual bool ShouldHideOpenButton()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### OnHeaderGUI()
```csharp
protected virtual void OnHeaderGUI()
```

#### DrawDefaultInspector()
```csharp
public bool DrawDefaultInspector()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### GetInstanceID()
```csharp
public int GetInstanceID()
```

**Returns** <br>
[int](https://learn.microsoft.com/en-us/dotnet/api/System.Int32?view=net-7.0) <br>

#### Equals(Object)
```csharp
public virtual bool Equals(Object other)
```

**Parameters** <br>
`other` [Object](https://learn.microsoft.com/en-us/dotnet/api/System.Object?view=net-7.0) <br>

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### HasPreviewGUI()
```csharp
public virtual bool HasPreviewGUI()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### MoveNextTarget()
```csharp
public virtual bool MoveNextTarget()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### RequiresConstantRepaint()
```csharp
public virtual bool RequiresConstantRepaint()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### UseDefaultMargins()
```csharp
public virtual bool UseDefaultMargins()
```

**Returns** <br>
[bool](https://learn.microsoft.com/en-us/dotnet/api/System.Boolean?view=net-7.0) <br>

#### GetPreviewTitle()
```csharp
public virtual GUIContent GetPreviewTitle()
```

**Returns** <br>
[GUIContent](../) <br>

#### GetHashCode()
```csharp
public virtual int GetHashCode()
```

**Returns** <br>
[int](https://learn.microsoft.com/en-us/dotnet/api/System.Int32?view=net-7.0) <br>

#### GetInfoString()
```csharp
public virtual string GetInfoString()
```

**Returns** <br>
[string](https://learn.microsoft.com/en-us/dotnet/api/System.String?view=net-7.0) <br>

#### ToString()
```csharp
public virtual string ToString()
```

**Returns** <br>
[string](https://learn.microsoft.com/en-us/dotnet/api/System.String?view=net-7.0) <br>

#### RenderStaticPreview(string, Object[], int, int)
```csharp
public virtual Texture2D RenderStaticPreview(string assetPath, Object[] subAssets, int width, int height)
```

**Parameters** <br>
`assetPath` [string](https://learn.microsoft.com/en-us/dotnet/api/System.String?view=net-7.0) <br>
`subAssets` [Object[]](../) <br>
`width` [int](https://learn.microsoft.com/en-us/dotnet/api/System.Int32?view=net-7.0) <br>
`height` [int](https://learn.microsoft.com/en-us/dotnet/api/System.Int32?view=net-7.0) <br>

**Returns** <br>
[Texture2D](../) <br>

#### CreateInspectorGUI()
```csharp
public virtual VisualElement CreateInspectorGUI()
```

**Returns** <br>
[VisualElement](../) <br>

#### Cleanup()
```csharp
public virtual void Cleanup()
```

#### DrawPreview(Rect)
```csharp
public virtual void DrawPreview(Rect previewArea)
```

**Parameters** <br>
`previewArea` [Rect](../) <br>

#### Initialize(Object[])
```csharp
public virtual void Initialize(Object[] targets)
```

**Parameters** <br>
`targets` [Object[]](../) <br>

#### OnInspectorGUI()
```csharp
public virtual void OnInspectorGUI()
```

#### OnInteractivePreviewGUI(Rect, GUIStyle)
```csharp
public virtual void OnInteractivePreviewGUI(Rect r, GUIStyle background)
```

**Parameters** <br>
`r` [Rect](../) <br>
`background` [GUIStyle](../) <br>

#### OnPreviewGUI(Rect, GUIStyle)
```csharp
public virtual void OnPreviewGUI(Rect r, GUIStyle background)
```

**Parameters** <br>
`r` [Rect](../) <br>
`background` [GUIStyle](../) <br>

#### OnPreviewSettings()
```csharp
public virtual void OnPreviewSettings()
```

#### ReloadPreviewInstances()
```csharp
public virtual void ReloadPreviewInstances()
```

#### Repaint()
```csharp
public virtual void Repaint()
```

#### ResetTarget()
```csharp
public virtual void ResetTarget()
```

#### DrawHeader()
```csharp
public void DrawHeader()
```

#### SetDirty()
```csharp
public void SetDirty()
```

